from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from core.models import Course,InterviewQuestion,Profile,AIRecommendation
class Command(BaseCommand):
    help='Seed demo data for the EntreSkill Hub portfolio demo.'
    def handle(self,*args,**kwargs):
        user,_=User.objects.get_or_create(username='demo',defaults={'email':'demo@enterskill.local'})
        if not user.has_usable_password(): user.set_password('Demo@12345'); user.save()
        Profile.objects.get_or_create(user=user,defaults={'headline':'Full Stack AI Developer','target_role':'Full Stack AI Developer','readiness':78})
        courses=[('Python Interview Engineering','python-interview','Python logic, OOP and coding interview patterns.'),('Django REST Production','django-rest','Build secure REST APIs with Django REST Framework.'),('React Frontend Systems','react-systems','Build reusable React interfaces and state flows.'),('SQL Performance Lab','sql-performance','Master joins, indexes, transactions and optimization.'),('AI Engineering Lab','ai-engineering','Build practical AI features with evaluation-first design.'),('EntreSkill Hub Project','enterskill-project','Deep dive into the portfolio project architecture.')]
        for t,s,d in courses: Course.objects.get_or_create(slug=s,defaults={'title':t,'description':d,'level':'Interview','duration_hours':12})
        qs=[('Why Django for a full-stack platform?','Django gives Python developers structured routing, ORM, security features and a mature ecosystem.','Django','Medium'),('Explain JWT authentication.','The user authenticates, receives tokens, and sends an access token with protected API requests.','Security','Medium'),('How would you scale EntreSkill Hub?','Start with stateless API instances, caching, indexed database queries, background jobs and observability, then split services only where justified.','System Design','Hard'),('Why React?','React enables reusable components and interactive client-side experiences while the backend remains API-driven.','React','Easy')]
        for q,a,t,d in qs: InterviewQuestion.objects.get_or_create(question=q,defaults={'answer':a,'topic':t,'difficulty':d})
        recs=[('skill-gap','Master REST API Security','Your target role needs strong backend API reasoning.','1'),('project','Practice Architecture Defense','Be ready to explain every EntreSkill Hub layer.','1'),('interview','Run a Project Mock','Project cross-questioning is a high-value interview round.','2')]
        for k,t,r,p in recs: AIRecommendation.objects.get_or_create(user=user,kind=k,title=t,defaults={'reason':r,'priority':int(p)})
        self.stdout.write(self.style.SUCCESS('Demo data ready. Login: demo / Demo@12345'))
