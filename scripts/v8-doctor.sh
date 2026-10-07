#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

LOG="$ROOT/v8-doctor.log"
: > "$LOG"

PASS=0
WARN=0
FAIL=0

pass(){ PASS=$((PASS+1)); echo "[PASS] $1" | tee -a "$LOG"; }
warn(){ WARN=$((WARN+1)); echo "[WARN] $1" | tee -a "$LOG"; }
fail(){ FAIL=$((FAIL+1)); echo "[FAIL] $1" | tee -a "$LOG"; }

run_check(){
  local name="$1"
  shift
  if "$@" >>"$LOG" 2>&1; then
    pass "$name"
  else
    fail "$name"
    echo "---- $name output ----"
    tail -40 "$LOG" || true
    echo "-----------------------"
  fi
}

echo "=============================================="
echo " V8 PROJECT DOCTOR"
echo "=============================================="

echo
echo "[1] Repository"

if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  pass "Git repository detected"
else
  fail "Git repository not detected"
  exit 1
fi

if git branch --show-current | grep -q .; then
  pass "Git branch detected"
else
  fail "Git branch unavailable"
fi

echo
echo "[2] Frontend"

if [ -d frontend ]; then
  pass "Frontend directory exists"
else
  fail "frontend directory missing"
fi

cd "$ROOT/frontend"

if [ -f package.json ]; then
  pass "package.json exists"
else
  fail "package.json missing"
fi

if [ -f src/main.jsx ]; then
  pass "main.jsx exists"
else
  fail "src/main.jsx missing"
fi

if grep -q "V8Doctor" src/main.jsx; then
  pass "V8 route integration detected"
else
  warn "V8 route integration not detected in main.jsx"
fi

echo
echo "[3] Frontend dependency repair"

if npm install --no-audit --no-fund >>"$LOG" 2>&1; then
  pass "npm dependency installation"
else
  fail "npm dependency installation"
fi

echo
echo "[4] Frontend source checks"

if npx vite --version >>"$LOG" 2>&1; then
  pass "Vite available"
else
  fail "Vite unavailable"
fi

if npm run build >>"$LOG" 2>&1; then
  pass "Frontend production build"
else
  fail "Frontend production build"
fi

echo
echo "[5] Backend"

cd "$ROOT"

if [ -d backend ]; then
  pass "Backend directory exists"

  if command -v python3 >/dev/null 2>&1; then
    pass "Python available"

    if python3 -m compileall -q backend >>"$LOG" 2>&1; then
      pass "Python syntax compilation"
    else
      fail "Python syntax compilation"
    fi
  else
    warn "python3 not available"
  fi

  if [ -f backend/manage.py ]; then
    cd backend

    if python3 manage.py check >>"$LOG" 2>&1; then
      pass "Django system check"
    else
      fail "Django system check"
    fi

    if python3 manage.py makemigrations --check --dry-run >>"$LOG" 2>&1; then
      pass "Migration consistency"
    else
      warn "Migration changes detected or migration check failed"
    fi

    cd "$ROOT"
  else
    warn "backend/manage.py not found"
  fi
else
  warn "backend directory not found; frontend-only project detected"
fi

echo
echo "[6] Security baseline"

if find "$ROOT" -maxdepth 3 -type f \
  \( -name ".env" -o -name ".env.local" -o -name ".env.production" \) \
  -not -path "*/node_modules/*" | grep -q .; then
  warn "Environment files exist; verify secrets are not committed"
else
  pass "No tracked environment file detected by basic scan"
fi

if git status --porcelain | grep -E '\.env($|\.)' >/dev/null 2>&1; then
  fail "Possible environment file visible in Git status"
else
  pass "No environment file visible in Git status"
fi

echo
echo "[7] Dangerous debug scan"

if grep -RInE "console\.log\(|debugger;" frontend/src \
  --exclude-dir=node_modules >>"$LOG" 2>&1; then
  warn "Debug statements detected in frontend source"
else
  pass "No basic frontend debug statements detected"
fi

echo
echo "[8] Required V8 files"

for f in \
  frontend/src/upgrades/V8Doctor.jsx \
  frontend/src/upgrades/v8.css \
  scripts/v8-doctor.sh
do
  if [ -f "$f" ]; then
    pass "$f"
  else
    fail "$f missing"
  fi
done

echo
echo "=============================================="
echo " V8 FINAL REPORT"
echo "=============================================="
echo "PASS : $PASS"
echo "WARN : $WARN"
echo "FAIL : $FAIL"
echo "LOG  : $LOG"
echo "=============================================="

if [ "$FAIL" -gt 0 ]; then
  echo "RELEASE BLOCKED — fix failed checks before push."
  exit 1
fi

echo "RELEASE GATE PASSED."
