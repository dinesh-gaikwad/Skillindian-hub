from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

r=DefaultRouter()
r.register('courses',CourseViewSet,basename='courses')
r.register('enrollments',EnrollmentViewSet,basename='enrollments')
r.register('interview-questions',InterviewQuestionViewSet,basename='interview-questions')
r.register('attempts',AttemptViewSet,basename='attempts')
r.register('certificates',CertificateViewSet,basename='certificates')
r.register('mentor-sessions',MentorSessionViewSet,basename='mentor-sessions')
r.register('project-submissions',ProjectSubmissionViewSet,basename='project-submissions')
r.register('ai-recommendations',AIRecommendationViewSet,basename='ai-recommendations')
urlpatterns=[path('health/',health),path('register/',register),path('profile/',profile),path('dashboard/',dashboard),path('ai/generate/',generate_recommendations),path('token/',TokenObtainPairView.as_view()),path('token/refresh/',TokenRefreshView.as_view()),path('',include(r.urls))]
