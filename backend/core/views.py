from pathlib import Path
from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Avg
from django.http import FileResponse, Http404
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from .serializers import *

class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Course.objects.filter(published=True).order_by('-created_at')
    serializer_class=CourseSerializer

class EnrollmentViewSet(viewsets.ModelViewSet):
    serializer_class=EnrollmentSerializer
    permission_classes=[IsAuthenticated]
    def get_queryset(self): return Enrollment.objects.filter(user=self.request.user).select_related('course')
    def perform_create(self,serializer): serializer.save(user=self.request.user)
    @action(detail=True,methods=['patch'])
    def progress(self,request,pk=None):
        enrollment=self.get_object(); value=max(0,min(100,int(request.data.get('progress',enrollment.progress))))
        enrollment.progress=value; enrollment.completed=value>=100; enrollment.save()
        if enrollment.completed:
            Certificate.objects.get_or_create(user=request.user,course=enrollment.course)
        return Response(EnrollmentSerializer(enrollment,context={'request':request}).data)

class InterviewQuestionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=InterviewQuestion.objects.filter(is_active=True).order_by('id')
    serializer_class=InterviewQuestionSerializer
    permission_classes=[IsAuthenticated]

class AttemptViewSet(viewsets.ModelViewSet):
    serializer_class=AttemptSerializer; permission_classes=[IsAuthenticated]
    def get_queryset(self): return Attempt.objects.filter(user=self.request.user).select_related('question')
    def perform_create(self,serializer):
        q=serializer.validated_data['question']; answer=serializer.validated_data.get('answer','')
        text=answer.lower(); keywords=[w for w in q.answer.lower().split() if len(w)>4][:8]
        hits=sum(1 for w in keywords if w in text); score=min(100,round((hits/max(1,len(keywords)))*100))
        feedback='Strong answer. Add a concrete project example and trade-off.' if score>=70 else 'Improve the definition, reasoning, and project example.'
        serializer.save(user=self.request.user,score=score,feedback=feedback)
        profile=Profile.objects.get_or_create(user=self.request.user)[0]
        profile.readiness=max(0,min(100,round(profile.readiness*0.9+score*0.1))); profile.save(update_fields=['readiness'])

class CertificateViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class=CertificateSerializer; permission_classes=[IsAuthenticated]
    def get_queryset(self): return Certificate.objects.filter(user=self.request.user).select_related('course')

class MentorSessionViewSet(viewsets.ModelViewSet):
    serializer_class=MentorSessionSerializer; permission_classes=[IsAuthenticated]
    def get_queryset(self): return MentorSession.objects.filter(learner=self.request.user)
    def perform_create(self,serializer): serializer.save(learner=self.request.user)

class ProjectSubmissionViewSet(viewsets.ModelViewSet):
    serializer_class=ProjectSubmissionSerializer; permission_classes=[IsAuthenticated]
    def get_queryset(self): return ProjectSubmission.objects.filter(user=self.request.user)
    def perform_create(self,serializer): serializer.save(user=self.request.user)

class AIRecommendationViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class=AIRecommendationSerializer; permission_classes=[IsAuthenticated]
    def get_queryset(self): return AIRecommendation.objects.filter(user=self.request.user).order_by('priority','-created_at')

@api_view(['GET'])
def health(request): return Response({'status':'ok','service':'EntreSkill Hub V2','version':'2.0.0'})

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    data=request.data; username=str(data.get('username','')).strip(); password=str(data.get('password','')); email=data.get('email','')
    if len(username)<3 or len(password)<8: return Response({'error':'username must be 3+ chars and password 8+ chars'},status=400)
    if User.objects.filter(username=username).exists(): return Response({'error':'username already exists'},status=409)
    user=User.objects.create_user(username=username,password=password,email=email)
    Profile.objects.create(user=user)
    refresh=RefreshToken.for_user(user)
    return Response({'access':str(refresh.access_token),'refresh':str(refresh),'user':UserSerializer(user).data},status=201)

@api_view(['GET','PATCH'])
@permission_classes([IsAuthenticated])
def profile(request):
    p=Profile.objects.get_or_create(user=request.user)[0]
    if request.method=='PATCH':
        for key in ('headline','target_role'):
            if key in request.data: setattr(p,key,str(request.data[key])[:160 if key=='headline' else 100])
        p.save()
    return Response(ProfileSerializer(p,context={'request':request}).data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    profile=Profile.objects.get_or_create(user=request.user)[0]; en=Enrollment.objects.filter(user=request.user)
    avg=en.aggregate(v=Avg('progress'))['v'] or 0
    attempts=Attempt.objects.filter(user=request.user)
    attempt_avg=attempts.aggregate(v=Avg('score'))['v'] or 0
    return Response({'user':UserSerializer(request.user).data,'readiness':profile.readiness,'enrollments':en.count(),'average_progress':round(avg),'certificates':Certificate.objects.filter(user=request.user).count(),'project_submissions':ProjectSubmission.objects.filter(user=request.user).count(),'ai_recommendations':AIRecommendation.objects.filter(user=request.user).count(),'attempts':attempts.count(),'average_attempt_score':round(attempt_avg)})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_recommendations(request):
    p=Profile.objects.get_or_create(user=request.user)[0]
    recs=[('skill','Master REST APIs','Build and test CRUD endpoints with JWT authentication.',1),('project','Ship EntreSkill Hub V2','Connect enrollment, progress, interview scoring and certificates.',1),('interview','Practice project cross-questions','Explain architecture, trade-offs, security and scaling.',2)]
    AIRecommendation.objects.filter(user=request.user).delete()
    for kind,title,reason,priority in recs: AIRecommendation.objects.create(user=request.user,kind=kind,title=title,reason=reason,priority=priority)
    return Response(AIRecommendationSerializer(AIRecommendation.objects.filter(user=request.user),many=True).data)

def frontend(request, path=''):
    root=Path(settings.FRONTEND_DIST)
    if path and (root/path).is_file(): return FileResponse(open(root/path,'rb'))
    index=root/'index.html'
    if not index.exists(): raise Http404('Frontend build not found')
    return FileResponse(open(index,'rb'),content_type='text/html')
