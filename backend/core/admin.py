from django.contrib import admin
from .models import *
admin.site.register([Profile,Course,Enrollment,InterviewQuestion,Attempt,Certificate,MentorSession,ProjectSubmission,AIRecommendation])
