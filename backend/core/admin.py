from django.contrib import admin
from .models import *
for model in [Profile,Course,Enrollment,InterviewQuestion,Attempt,Certificate,MentorSession,ProjectSubmission,AIRecommendation]:
    admin.site.register(model)
