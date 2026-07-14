import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    headless: false, // default for all
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'Google Chrome',
      reporter:'html',
      use: {
          // viewport: { width: 390, height: 844 },
          // ...devices['iPad (gen 11)'],
          //  permissions: ['geolocation'],   // allow permissions

        // ignoreHTTPSErrors: true,        // ignore SSL/HTTPS errors
        // video: 'on-first-retry'   ,   // save on retry
        //  video: 'retain-on-failure',

    // screenshot: 'only-on-failure',

    // trace: 'on-first-retry'
    // retries: 1,   // retry once if failed

        browserName: 'chromium',
        channel: 'chrome',   // ✅ launches real Chrome (not Chromium)
        headless: true,
        screenshot : 'on',
        trace:'on'
      },
    },
  ],
});