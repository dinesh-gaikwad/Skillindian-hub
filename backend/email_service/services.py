from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


def send_service_email(
    subject,
    recipient,
    template_name,
    context=None,
):
    context = context or {}

    html = render_to_string(
        f"email_service/{template_name}.html",
        context,
    )

    text = context.get(
        "message",
        "EntreSkill Hub notification."
    )

    email = EmailMultiAlternatives(
        subject=subject,
        body=text,
        from_email=getattr(
            settings,
            "DEFAULT_FROM_EMAIL",
            "noreply@entreskillhub.com",
        ),
        to=[recipient],
    )

    email.attach_alternative(html, "text/html")
    return email.send(fail_silently=False)


def send_welcome_email(user):
    return send_service_email(
        "Welcome to EntreSkill Hub",
        user.email,
        "welcome",
        {
            "name": getattr(user, "first_name", "") or getattr(
                user, "username", "Learner"
            ),
            "message": "Welcome to EntreSkill Hub.",
        },
    )


def send_course_enrollment_email(user, course_name):
    return send_service_email(
        f"Course Enrollment: {course_name}",
        user.email,
        "notification",
        {
            "name": getattr(user, "first_name", "") or getattr(
                user, "username", "Learner"
            ),
            "title": "Course Enrollment Confirmed",
            "message": f"You are enrolled in {course_name}.",
        },
    )


def send_completion_email(user, course_name):
    return send_service_email(
        f"Course Completed: {course_name}",
        user.email,
        "notification",
        {
            "name": getattr(user, "first_name", "") or getattr(
                user, "username", "Learner"
            ),
            "title": "Course Completed",
            "message": f"Congratulations. You completed {course_name}.",
        },
    )


def send_security_alert_email(user, message):
    return send_service_email(
        "EntreSkill Hub Security Alert",
        user.email,
        "notification",
        {
            "name": getattr(user, "first_name", "") or getattr(
                user, "username", "Learner"
            ),
            "title": "Security Alert",
            "message": message,
        },
    )
