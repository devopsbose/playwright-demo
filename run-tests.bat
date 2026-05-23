@echo off
cd /d "d:\learning\playwright.worktrees\agents-run-tests-automation"
echo Installing dependencies...
call npm install
echo.
echo Running tests...
call npx playwright test
pause
