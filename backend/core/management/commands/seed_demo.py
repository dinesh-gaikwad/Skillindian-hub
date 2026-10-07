from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from core.models import Profile, Course, InterviewQuestion, AIRecommendation

COURSES=[
('Python Production','python-production','Python fundamentals, OOP, testing and clean architecture.','Beginner',36),
('Django REST Engineering','django-rest','Django, DRF, JWT, permissions and production APIs.','Intermediate',42),
('React Full Stack','react-full-stack','React components, hooks, routing and API integration.','Intermediate',38),
('SQL & Database Engineering','sql-database','SQL, DBMS, indexes, transactions and schema design.','Intermediate',30),
('AI Engineering','ai-engineering','Prompting, RAG, embeddings, evaluation and AI product patterns.','Advanced',34),
('EntreSkill Hub Capstone','enterskill-capstone','Build the complete full-stack AI developer portfolio project.','Advanced',60),
]
QUESTIONS=[
('Why Django for EntreSkill Hub?','Django provides batteries-included backend features, ORM, authentication integration and a mature ecosystem.','Django','Medium'),
('How does JWT authentication work?','The user logs in, the server issues an access token and refresh token, and the client sends the access token with protected API requests.','Security','Medium'),
('How would you scale this project?','Add caching, database indexes, pagination, async workers, object storage and horizontal application replicas behind a load balancer.','System Design','Hard'),
('Why React?','React makes UI composition predictable through reusable components, state management and a strong ecosystem for SPA development.','React','Easy'),
('How do you prevent unauthorized enrollment access?','The API derives the user from the JWT and filters enrollment queries by request.user, preventing cross-user access.','Django','Hard'),
]
class Command(BaseCommand):
    help='Create safe demo data for EntreSkill Hub V2.'
    def handle(self,*args,**kwargs):
        user,_=User.objects.get_or_create(username='demo',defaults={'email':'demo@enterskill.local'})
        user.set_password('Demo@12345'); user.save()
        Profile.objects.get_or_create(user=user,defaults={'headline':'Full Stack AI Developer','target_role':'Full Stack AI Developer','readiness':78})
        for title,slug,desc,level,hours in COURSES:
            Course.objects.get_or_create(slug=slug,defaults={'title':title,'description':desc,'level':level,'duration_hours':hours,'published':True})
        for q,a,t,d in QUESTIONS:
            InterviewQuestion.objects.get_or_create(question=q,defaults={'answer':a,'topic':t,'difficulty':d,'is_active':True})
        for kind,title,reason,priority in [
            ('skill','REST API security','Practice JWT, authorization and object-level access control.',1),
            ('project','Complete capstone','Finish enrollment, progress, interview scoring and certificates.',1),
            ('interview','System design drill','Practice scaling, caching, queues and database trade-offs.',2),
        ]:
            AIRecommendation.objects.get_or_create(user=user,title=title,defaults={'kind':kind,'reason':reason,'priority':priority})
        self.stdout.write(self.style.SUCCESS('Demo ready: demo / Demo@12345'))
