# EntreSkill Hub V2 — Single-Service Full-Stack AI Developer Project

V2 upgrades the V1 100-screen portfolio into a connected application flow and changes Render deployment to **one web service** for the full stack.

## V2 live application flow

`React SPA → same-origin /api → Django REST Framework → JWT → PostgreSQL`

The same Render web service serves:
- React/Vite production build at `/`
- Django REST API at `/api/`
- Django Admin at `/admin/`
- WhiteNoise static assets at `/static/`

A managed Render PostgreSQL database is attached through `DATABASE_URL`.

## Added in V2

- Real JWT login and registration UI.
- Persistent browser session with access/refresh token storage.
- User-specific dashboard from Django API.
- User profile API.
- Course catalogue API.
- Authenticated enrollments.
- Progress update endpoint.
- Automatic certificate creation when enrollment reaches 100%.
- Interview question API.
- Interview attempt scoring and feedback.
- Readiness score update from interview attempts.
- User-specific project submissions.
- User-specific mentor session requests.
- AI recommendation generation endpoint (deterministic provider-ready V2 logic).
- Demo seed data: `demo / Demo@12345`.
- Single Docker image that builds React and then serves it from Django.
- Updated `render.yaml` with one web service + PostgreSQL.
- `MASTER_V2_DEPLOY.cmd` for Windows build/check workflow.

## Render deployment — one web service

1. Push this project to GitHub.
2. In Render, create a Blueprint from the repository.
3. Render reads `render.yaml`.
4. The web service uses the root `Dockerfile`.
5. The Docker build runs `npm install` + `npm run build` in a Node stage.
6. The React `dist` output is copied into Django's static tree.
7. Django runs migrations and seeds safe demo data on startup.
8. The same web service handles `/`, `/api/*`, `/admin/*`.
9. PostgreSQL is connected through the Render-provided `DATABASE_URL`.

No separate Render Static Site is required for V2.

## Local development

### Backend
```bash
cd backend
python -m venv .venv
# activate the environment
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo
python manage.py runserver
```

### Frontend dev server
```bash
cd frontend
npm install
npm run dev
```

The Vite development server uses `/api` as the default API path; configure a proxy if running frontend and backend on different ports locally.

### Single-image production test
```bash
docker build -t enterskill-hub-v2 .
docker run -p 8000:8000 -e DEBUG=False -e SECRET_KEY=local-secret enterskill-hub-v2
```

## Demo login

- Username: `demo`
- Password: `Demo@12345`

Change or remove demo credentials before treating the deployment as a private production system.

## Important interview honesty

V2 implements the application plumbing for authentication, learning progress, interview scoring, certificates and AI recommendations. The AI endpoint is still **provider-ready deterministic logic**, not a claim of a live LLM provider. Production OAuth providers, transactional email, PDF certificate rendering, Redis/background workers, advanced observability and Kubernetes infrastructure remain separate hardening stages.

Only claim technologies/features in a resume when they are actually implemented, tested and explainable in an interview.
