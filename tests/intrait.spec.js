import { test, expect } from '@playwright/test';

test('Intrait site basic availability', async ({ page }) => {
  const url = 'https://intrait.web.bc/cgi-bin/index';
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' });

  if (!response) {
    throw new Error(`Navigation to ${url} failed: no response`);
  }

  await expect(response.status()).toBeLessThan(400);

  // Optional: check for a page-specific element if known, e.g.:
  // await expect(page.locator('header')).toBeVisible();
});
