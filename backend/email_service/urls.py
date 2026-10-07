from django.urls import include, path
from .views import email_health

urlpatterns = [
    path("api/email/", include("email_service.urls")),
    path("health/", email_health, name="email-health"),
]
