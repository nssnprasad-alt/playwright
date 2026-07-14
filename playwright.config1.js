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
    use: {
      browserName: 'chromium',
      channel: 'chrome',
      headless: true,
      screenshot: 'on',
      trace: 'on'
    },
  },

  {
    name: 'Safari',
    use: {
        
      browserName: 'webkit',   // ✅ Safari engine
      headless: true,
      screenshot: 'on',
      trace: 'on'
    },
  },
  
],
});