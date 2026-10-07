@echo off
setlocal
cd /d %~dp0

echo ================================================
echo EntreSkill Hub V2 - MASTER BUILD / DEPLOY
echo Single Render Service: React + Django + API
echo ================================================

where node >nul 2>nul || (echo ERROR: Node.js is required.& exit /b 1)
where npm >nul 2>nul || (echo ERROR: npm is required.& exit /b 1)
where python >nul 2>nul || (echo ERROR: Python is required.& exit /b 1)

if not exist frontend\node_modules (
  echo [1/6] Installing frontend dependencies...
  cd frontend
  call npm install || exit /b 1
  cd ..
) else (
  echo [1/6] Frontend dependencies already installed.
)

echo [2/6] Building React frontend...
cd frontend
call npm run build || exit /b 1
cd ..

echo [3/6] Checking Django backend...
cd backend
python manage.py check || exit /b 1
python manage.py collectstatic --noinput
cd ..

echo [4/6] Building single production Docker image...
docker build -t enterskill-hub-v2 . || (echo ERROR: Docker build failed.& exit /b 1)

echo [5/6] Local production image created.
echo Render deployment uses render.yaml + the root Dockerfile.

echo [6/6] Optional Git push.
echo If this folder is connected to your Git repo, run:
echo     git add .
echo     git commit -m "EntreSkill Hub V2 production full stack"
echo     git push

echo.
echo DONE: One Render web service serves React, Django API and Admin.
echo Database is the managed Render PostgreSQL service from render.yaml.
endlocal
