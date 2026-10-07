from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Course, Enrollment, InterviewQuestion, Attempt, Certificate, MentorSession, ProjectSubmission, AIRecommendation, Profile

class UserSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('id','username','email','first_name','last_name','role')
    def get_role(self, obj):
        return getattr(getattr(obj,'profile',None),'role','student')

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Profile
        fields = ('user','role','headline','target_role','readiness')
        read_only_fields = ('role','readiness')

class CourseSerializer(serializers.ModelSerializer):
    enrolled = serializers.SerializerMethodField()
    progress = serializers.SerializerMethodField()
    class Meta:
        model = Course
        fields = '__all__'
    def get_enrolled(self,obj):
        user=self.context['request'].user
        return user.is_authenticated and obj.enrollments.filter(user=user).exists()
    def get_progress(self,obj):
        user=self.context['request'].user
        if not user.is_authenticated: return 0
        return obj.enrollments.filter(user=user).values_list('progress',flat=True).first() or 0

class EnrollmentSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    course_id = serializers.PrimaryKeyRelatedField(source='course', queryset=Course.objects.filter(published=True), write_only=True)
    class Meta:
        model=Enrollment; fields=('id','course','course_id','progress','completed','updated_at')
        read_only_fields=('completed','updated_at')

class InterviewQuestionSerializer(serializers.ModelSerializer):
    class Meta: model=InterviewQuestion; fields='__all__'

class AttemptSerializer(serializers.ModelSerializer):
    question = InterviewQuestionSerializer(read_only=True)
    question_id = serializers.PrimaryKeyRelatedField(source='question', queryset=InterviewQuestion.objects.filter(is_active=True), write_only=True)
    class Meta: model=Attempt; fields=('id','question','question_id','answer','score','feedback','created_at'); read_only_fields=('score','feedback','created_at')

class CertificateSerializer(serializers.ModelSerializer):
    course_title = serializers.CharField(source='course.title', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    class Meta: model=Certificate; fields=('id','certificate_id','course','course_title','username','issued_at')

class MentorSessionSerializer(serializers.ModelSerializer):
    class Meta: model=MentorSession; fields='__all__'; read_only_fields=('learner',)

class ProjectSubmissionSerializer(serializers.ModelSerializer):
    class Meta: model=ProjectSubmission; fields='__all__'; read_only_fields=('user','status','score','created_at')

class AIRecommendationSerializer(serializers.ModelSerializer):
    class Meta: model=AIRecommendation; fields='__all__'; read_only_fields=('user','created_at')
