const { execSync } = require('child_process');
const path = require('path');

const dir = 'd:\\learning\\playwright.worktrees\\agents-run-tests-automation';

try {
  console.log('Installing dependencies...');
  execSync('npm install', { cwd: dir, stdio: 'inherit' });
  
  console.log('\nRunning Playwright tests...');
  execSync('npx playwright test', { cwd: dir, stdio: 'inherit' });
} catch (error) {
  console.error('Test execution failed:', error.message);
  process.exit(1);
}
