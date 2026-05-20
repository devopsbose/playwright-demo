/**
 * Browser Configuration POM
 * Defines browser versions and configurations for testing
 */

export const browserConfig = {
  chromium: {
    version: '126.0.6478.55', // Options: 'latest', 'beta', or specific version like '126.0.6478.55'
    channel: chrome, // Options: 'chrome', 'chrome-beta', 'chrome-dev', 'chrome-canary', undefined (default Playwright Chromium)
    headless: false,
  },
  firefox: {
    version: 'latest',
    headless: false,
  },
  webkit: {
    version: 'latest',
    headless: false,
  },
};

/**
 * Get Chrome-specific configuration
 * @returns {Object} Chrome configuration object
 */
export const getChromeConfig = () => {
  return {
    name: 'chromium',
    use: {
      ...browserConfig.chromium,
    },
  };
};

/**
 * Get all browser configurations
 * @returns {Array} Array of all browser project configurations
 */
export const getAllBrowserConfigs = () => {
  return [
    getChromeConfig(),
    {
      name: 'firefox',
      use: { ...browserConfig.firefox },
    },
    {
      name: 'webkit',
      use: { ...browserConfig.webkit },
    },
  ];
};
