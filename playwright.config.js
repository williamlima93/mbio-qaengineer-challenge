// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  timeout: 60000,
  expect: {
    /**
       * Maximum time expect() should wait for the condition to be met.
       * For example in `await expect(locator).toHaveText();`
       */
    timeout: 15000
  },
  testDir: './tests',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  /* Configure projects for major browsers */
  projects: [

    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
        permissions: ["microphone", "notifications"],
        launchOptions: {
          args: [
            "--disable-infobars",
            "--suppress-message-center-popups",
            "--start-fullscreen"
          ]
        }
      },
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: {
          args: [
            "--disable-infobars",
            "--suppress-message-center-popups",
            "--start-fullscreen"
          ]
        }
      },
    }
  ]
});

