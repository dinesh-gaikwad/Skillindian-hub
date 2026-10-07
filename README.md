# EntreSkill Hub V1 — 100-Screen Full-Stack AI Developer Portfolio

A portfolio-grade, interview-first learning/career platform inspired by the supplied resume and EntreSkill Hub project concept.

## V1 highlights
- 100 connected learning, project, AI and interview screens.
- Responsive React/Vite frontend with reusable UI.
- Search across all 100 screens.
- Previous/next navigation and cross-module connections.
- Interactive code lab, AI-ready copilot, project architecture canvas and mock interview arena.
- Django REST backend with JWT endpoints, courses, enrollments, interview questions, certificates, mentorship, project submissions and AI recommendations.
- PostgreSQL/SQLite ready.
- Docker + Render configuration.
- Admin-ready Django models.

## Important implementation note
This V1 is intentionally honest: the AI screens are **AI-provider ready** and include a deterministic demo response. A real LLM provider must be connected through a backend service and secret key before claiming live AI generation in production.

Likewise, the UI contains architecture/features for the full project story, while some advanced business rules (production OAuth provider integration, live email provider, real certificate PDF generation, distributed queues, Kubernetes manifests, etc.) are staged for later builds.

## Local run
### Backend
```bash
cd backend
python -m venv .venv
# activate the environment
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` if the backend is not at `http://localhost:8000/api`.

## Interview demo flow
1. Dashboard
2. Resume Score
3. EntreSkill Hub Overview
4. Architecture
5. Authentication
6. AI Career Engine
7. Coding Lab
8. Project Mock
9. System Design Mock
10. Final Interview

## 100-screen route map
The route definitions live in `frontend/src/main.jsx` in the `groups` and `pageMeta` structures. Each screen is connected through the sidebar, search, related links, and previous/next navigation.
