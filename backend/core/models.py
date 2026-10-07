from django.db import models
from django.contrib.auth.models import User
import uuid

class Profile(models.Model):
    ROLE_CHOICES = [('student','Student'),('mentor','Mentor'),('admin','Admin')]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    headline = models.CharField(max_length=160, blank=True)
    target_role = models.CharField(max_length=100, default='Full Stack AI Developer')
    readiness = models.PositiveIntegerField(default=72)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self): return self.user.username

class Course(models.Model):
    title = models.CharField(max_length=160)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    level = models.CharField(max_length=30, default='Intermediate')
    duration_hours = models.PositiveIntegerField(default=10)
    published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self): return self.title

class Enrollment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrollments')
    progress = models.PositiveIntegerField(default=0)
    completed = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta: unique_together = ('user','course')

class InterviewQuestion(models.Model):
    question = models.TextField()
    answer = models.TextField()
    topic = models.CharField(max_length=80)
    difficulty = models.CharField(max_length=20, default='Medium')
    is_active = models.BooleanField(default=True)

class Attempt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='attempts')
    question = models.ForeignKey(InterviewQuestion, on_delete=models.CASCADE, related_name='attempts')
    answer = models.TextField(blank=True)
    score = models.PositiveIntegerField(default=0)
    feedback = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Certificate(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='certificates')
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    certificate_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    issued_at = models.DateTimeField(auto_now_add=True)

class MentorSession(models.Model):
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mentor_sessions')
    mentor_name = models.CharField(max_length=100)
    topic = models.CharField(max_length=160)
    status = models.CharField(max_length=30, default='requested')
    scheduled_for = models.DateTimeField(null=True, blank=True)

class ProjectSubmission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='project_submissions')
    title = models.CharField(max_length=160)
    description = models.TextField()
    repo_url = models.URLField(blank=True)
    status = models.CharField(max_length=30, default='submitted')
    score = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

class AIRecommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ai_recommendations')
    kind = models.CharField(max_length=50)
    title = models.CharField(max_length=160)
    reason = models.TextField()
    priority = models.PositiveIntegerField(default=3)
    created_at = models.DateTimeField(auto_now_add=True)
