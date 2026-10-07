import os
from pathlib import Path
import dj_database_url
from dotenv import load_dotenv
BASE_DIR=Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR/'.env')
SECRET_KEY=os.getenv('SECRET_KEY','dev-only-change-me')
DEBUG=os.getenv('DEBUG','False').lower()=='true'
ALLOWED_HOSTS=[x.strip() for x in os.getenv('ALLOWED_HOSTS','*').split(',') if x.strip()]
INSTALLED_APPS=['django.contrib.admin','django.contrib.auth','django.contrib.contenttypes','django.contrib.sessions','django.contrib.messages','django.contrib.staticfiles','corsheaders','rest_framework','rest_framework_simplejwt','core']
MIDDLEWARE=['corsheaders.middleware.CorsMiddleware','django.middleware.security.SecurityMiddleware','whitenoise.middleware.WhiteNoiseMiddleware','django.contrib.sessions.middleware.SessionMiddleware','django.middleware.common.CommonMiddleware','django.middleware.csrf.CsrfViewMiddleware','django.contrib.auth.middleware.AuthenticationMiddleware','django.contrib.messages.middleware.MessageMiddleware']
ROOT_URLCONF='config.urls'
TEMPLATES=[{'BACKEND':'django.template.backends.django.DjangoTemplates','DIRS':[],'APP_DIRS':True,'OPTIONS':{'context_processors':['django.template.context_processors.request','django.contrib.auth.context_processors.auth','django.contrib.messages.context_processors.messages']}}]
WSGI_APPLICATION='config.wsgi.application'
DATABASE_URL=os.getenv('DATABASE_URL')
DATABASES={'default':dj_database_url.config(default=DATABASE_URL or f"sqlite:///{BASE_DIR/'db.sqlite3'}",conn_max_age=600)}
AUTH_PASSWORD_VALIDATORS=[]
LANGUAGE_CODE='en-us'; TIME_ZONE='Asia/Kolkata'; USE_I18N=True; USE_TZ=True
STATIC_URL='/static/'; STATIC_ROOT=BASE_DIR/'staticfiles'; STATICFILES_DIRS=[BASE_DIR/'core'/'static']
DEFAULT_AUTO_FIELD='django.db.models.BigAutoField'
CORS_ALLOW_ALL_ORIGINS=os.getenv('CORS_ALLOW_ALL_ORIGINS','False').lower()=='true'
CSRF_TRUSTED_ORIGINS=[x.strip() for x in os.getenv('CSRF_TRUSTED_ORIGINS','').split(',') if x.strip()]
SECURE_PROXY_SSL_HEADER=('HTTP_X_FORWARDED_PROTO','https')
REST_FRAMEWORK={'DEFAULT_AUTHENTICATION_CLASSES':('rest_framework_simplejwt.authentication.JWTAuthentication',),'DEFAULT_PERMISSION_CLASSES':('rest_framework.permissions.AllowAny',),'DEFAULT_PAGINATION_CLASS':'rest_framework.pagination.PageNumberPagination','PAGE_SIZE':20}
SIMPLE_JWT={'ACCESS_TOKEN_LIFETIME':__import__('datetime').timedelta(minutes=30),'REFRESH_TOKEN_LIFETIME':__import__('datetime').timedelta(days=7)}
FRONTEND_DIST=BASE_DIR/'core'/'static'/'frontend'
