// @ts-check
import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../pages/PlaywrightDevPage.js';

test('has title', async ({ page }) => {
  const playwrightPage = new PlaywrightDevPage(page);
  
  await playwrightPage.navigateToHome();
  
  // Expect a title "to contain" a substring.
  const title = await playwrightPage.validatePageTitle();
  expect(title).toContain('Playwright');
});

test('get started link', async ({ page }) => {
  const playwrightPage = new PlaywrightDevPage(page);
  
  await playwrightPage.navigateToHome();

  // Click the get started link.
  await playwrightPage.clickGetStartedLink();

  // Expects page to have a heading with the name of Installation.
  const isInstallationHeadingVisible = await playwrightPage.validateInstallationHeadingVisible();
  expect(isInstallationHeadingVisible).toBeTruthy();
});
