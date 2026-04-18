import { defineConfig } from '@playwright/test';

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
        browserName: 'chromium',
        channel: 'chrome',   // ✅ launches real Chrome (not Chromium)
        headless: false,
        screenshot : 'on',
        trace:'on'
      },
    },
  ],
});