/**
 * Base Page Object Model
 * Contains common methods and utilities for all pages
 */

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   * @param {string} url - The URL to navigate to
   */
  async goto(url) {
    await this.page.goto(url);
  }

  /**
   * Get element by locator
   * @param {string} locator - The locator string
   * @returns {Locator} The element locator
   */
  getLocator(locator) {
    return this.page.locator(locator);
  }

  /**
   * Click on an element
   * @param {string} locator - The locator string
   */
  async click(locator) {
    await this.page.click(locator);
  }

  /**
   * Fill text in an input field
   * @param {string} locator - The locator string
   * @param {string} text - The text to fill
   */
  async fill(locator, text) {
    await this.page.fill(locator, text);
  }

  /**
   * Get text from an element
   * @param {string} locator - The locator string
   * @returns {Promise<string>} The text content
   */
  async getText(locator) {
    return await this.page.textContent(locator);
  }

  /**
   * Check if element is visible
   * @param {string} locator - The locator string
   * @returns {Promise<boolean>} True if visible
   */
  async isVisible(locator) {
    return await this.page.isVisible(locator);
  }

  /**
   * Wait for element to be visible
   * @param {string} locator - The locator string
   * @param {number} timeout - Timeout in milliseconds
   */
  async waitForElement(locator, timeout = 5000) {
    await this.page.waitForSelector(locator, { timeout });
  }

  /**
   * Get page title
   * @returns {Promise<string>} The page title
   */
  async getTitle() {
    return this.page.title();
  }

  /**
   * Pause/Wait for specified milliseconds
   * @param {number} milliseconds - Time to wait (default: 2000ms)
   */
  async pause(milliseconds = 2000) {
    await this.page.waitForTimeout(milliseconds);
  }
}
