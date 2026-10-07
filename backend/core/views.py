from django.contrib.auth.models import User
from django.db.models import Avg
from rest_framework import viewsets
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from .serializers import *
class CourseViewSet(viewsets.ModelViewSet):
    queryset=Course.objects.filter(published=True).order_by('-created_at')
    serializer_class=CourseSerializer
class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset=Enrollment.objects.select_related('course').all()
    serializer_class=EnrollmentSerializer
    def get_queryset(self):
        return Enrollment.objects.filter(user=self.request.user).select_related('course') if self.request.user.is_authenticated else Enrollment.objects.none()
class InterviewQuestionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=InterviewQuestion.objects.filter(is_active=True)
    serializer_class=InterviewQuestionSerializer
class CertificateViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Certificate.objects.select_related('course')
    serializer_class=CertificateSerializer
    def get_queryset(self):
        return Certificate.objects.filter(user=self.request.user).select_related('course') if self.request.user.is_authenticated else Certificate.objects.none()
class MentorSessionViewSet(viewsets.ModelViewSet):
    queryset=MentorSession.objects.all()
    serializer_class=MentorSessionSerializer
class ProjectSubmissionViewSet(viewsets.ModelViewSet):
    queryset=ProjectSubmission.objects.all()
    serializer_class=ProjectSubmissionSerializer
class AIRecommendationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=AIRecommendation.objects.all()
    serializer_class=AIRecommendationSerializer
    def get_queryset(self):
        return AIRecommendation.objects.filter(user=self.request.user) if self.request.user.is_authenticated else AIRecommendation.objects.none()
@api_view(['GET'])
def health(request):
    return Response({'status':'ok','service':'EntreSkill Hub API','version':'1.0.0'})
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    data=request.data; username=data.get('username'); password=data.get('password'); email=data.get('email','')
    if not username or not password:return Response({'error':'username and password are required'},status=400)
    if User.objects.filter(username=username).exists():return Response({'error':'username already exists'},status=409)
    user=User.objects.create_user(username=username,password=password,email=email);Profile.objects.create(user=user);refresh=RefreshToken.for_user(user)
    return Response({'access':str(refresh.access_token),'refresh':str(refresh),'user':{'id':user.id,'username':user.username,'email':user.email}},status=201)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    profile=Profile.objects.get_or_create(user=request.user)[0];en=Enrollment.objects.filter(user=request.user);avg=en.aggregate(v=Avg('progress'))['v'] or 0
    return Response({'user':request.user.username,'readiness':profile.readiness,'enrollments':en.count(),'average_progress':round(avg),'certificates':Certificate.objects.filter(user=request.user).count(),'project_submissions':ProjectSubmission.objects.filter(user=request.user).count(),'ai_recommendations':AIRecommendation.objects.filter(user=request.user).count()})
