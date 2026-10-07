from rest_framework import serializers
from .models import Course,Enrollment,InterviewQuestion,Certificate,MentorSession,ProjectSubmission,AIRecommendation
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Course
        fields='__all__'
class EnrollmentSerializer(serializers.ModelSerializer):
    course=CourseSerializer(read_only=True)
    class Meta:
        model=Enrollment
        fields='__all__'
class InterviewQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model=InterviewQuestion
        fields='__all__'
class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Certificate
        fields='__all__'
class MentorSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model=MentorSession
        fields='__all__'
class ProjectSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProjectSubmission
        fields='__all__'
class AIRecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model=AIRecommendation
        fields='__all__'
