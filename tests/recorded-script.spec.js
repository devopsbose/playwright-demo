import { test, expect } from '@playwright/test';

test('todotest', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('link', { name: 'real TodoMVC app.' }).click();
  await page.getByRole('banner').locator('div').filter({ hasText: 'Helping you select an MV*' }).getByRole('img').click();
   await page.getByText('Helping you select an MV*').click();
  await page.getByRole('heading', { name: 'Examples' }).click();
  await page.getByRole('heading', { name: 'Introduction' }).click();
  await page.getByRole('heading', { name: 'Introduction' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('iframe[title="Twitter Follow Button"]').contentFrame().getByRole('link', { name: 'Follow' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Loading…').locator('svg').click();
 // Explicit wait for 5 seconds
  await page.waitForTimeout(35000);
  await page1.getByRole('button', { name: 'No, thanks' }).click();
  await page1.getByRole('link', { name: 'X' }).click();
  await page1.getByText('Happening now').click();
  await page1.getByText('Happening now').click();
  await page.getByText('Brought to you by Addy Sindre').click();
  await page.getByText('Stephen', { exact: true }).click();
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('someting');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByText('All Active Completed').click();
  await page.getByText('Double-click to edit a todo').click();
  await page.getByTestId('todo-title').dblclick();
  await page.getByRole('textbox', { name: 'Edit' }).fill('something');
  await page.getByRole('textbox', { name: 'Edit' }).press('Enter');
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByText('All Active Completed').click();
  await page.getByRole('link', { name: 'Completed' }).click();
});