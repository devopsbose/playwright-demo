/**
 * Playwright.dev Website Page Object
 * Defines all locators and actions for the Playwright documentation site
 */

import { BasePage } from './BasePage.js';

export class PlaywrightDevPage extends BasePage {
  // Locators
  locators = {
    // Navigation and links
    getStartedLink: "a:has-text('Get started')",
    getStartedLinkByRole: { role: 'link', name: 'Get started' },

    // Headings
    installationHeading: "h1:has-text('Installation')",
    installationHeadingByRole: { role: 'heading', name: 'Installation' },
  };

  /**
   * Navigate to Playwright.dev homepage
   */
  async navigateToHome() {
    await playwrightPage.pause();
    await this.goto('https://playwright.dev/');
  }

  /**
   * Click the "Get started" link
   */
  async clickGetStartedLink() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }

  /**
   * Validate that page has correct title
   * @returns {Promise<string>} The page title
   */
  async validatePageTitle() {
    return await this.getTitle();
  }

  /**
   * Validate installation heading is visible
   * @returns {Promise<boolean>} True if installation heading is visible
   */
  async validateInstallationHeadingVisible() {
    return await this.page.getByRole('heading', { name: 'Installation' }).isVisible();
  }

  /**
   * Validate title contains text
   * @param {string} text - Text to validate in title
   * @returns {Promise<boolean>} True if title contains text
   */
  async validateTitleContains(text) {
    const title = await this.getTitle();
    return title.includes(text);
  }

  /**
   * Get the installation heading element
   * @returns {Locator} The element locator
   */
  async getInstallationHeading() {
    return this.page.getByRole('heading', { name: 'Installation' });
  }
}
