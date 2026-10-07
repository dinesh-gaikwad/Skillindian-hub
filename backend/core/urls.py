from django.urls import path,include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import *
r=DefaultRouter();r.register('courses',CourseViewSet);r.register('enrollments',EnrollmentViewSet);r.register('interview-questions',InterviewQuestionViewSet);r.register('certificates',CertificateViewSet);r.register('mentor-sessions',MentorSessionViewSet);r.register('project-submissions',ProjectSubmissionViewSet);r.register('ai-recommendations',AIRecommendationViewSet)
urlpatterns=[path('health/',health),path('register/',register),path('dashboard/',dashboard),path('token/',TokenObtainPairView.as_view()),path('token/refresh/',TokenRefreshView.as_view()),path('',include(r.urls))]
