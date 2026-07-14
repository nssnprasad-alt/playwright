import { test, expect, request } from '@playwright/test';
test('@web Google Chrome launch', async ({ page }) => {

    await page.goto('https://www.google.com');

    // Validate title
    await expect(page).toHaveTitle(/Google/);

    // Use stable locator
    await page.fill('textarea[name="q"]', 'Facebook');

    // Press Enter
    await page.keyboard.press('Enter');

    // Correct wait
    await page.waitForTimeout(5000);
    await page.close();
});

