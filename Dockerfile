# Single Render service: React is built into Django's static tree, then Django serves SPA + API.
FROM node:22-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM python:3.12-slim
WORKDIR /app/backend
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./
COPY --from=frontend-build /app/frontend/dist ./core/static/frontend/
RUN python manage.py collectstatic --noinput
EXPOSE 8000
COPY start.sh /app/backend/start.sh
RUN chmod +x /app/backend/start.sh
CMD ["/app/backend/start.sh"]
