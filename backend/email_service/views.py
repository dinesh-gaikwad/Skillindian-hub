from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def email_health(request):
    configured = bool(
        getattr(settings, "EMAIL_HOST", "")
        and getattr(settings, "EMAIL_HOST_USER", "")
        and getattr(settings, "EMAIL_HOST_PASSWORD", "")
    )

    return JsonResponse({
        "service": "email",
        "configured": configured,
        "backend": getattr(
            settings,
            "EMAIL_BACKEND",
            ""
        ),
        "host": getattr(
            settings,
            "EMAIL_HOST",
            ""
        ),
        "port": getattr(
            settings,
            "EMAIL_PORT",
            587
        ),
    })
