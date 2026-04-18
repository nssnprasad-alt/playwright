import { test, expect } from "@playwright/test";

test("Facebook Login Test", async ({ page }) => {

    console.log("Test running...");

    await page.goto("https://www.facebook.com", {
        waitUntil: "domcontentloaded"
    });

    await page.fill('input[name="email"]', 'Navya');
    await page.fill('input[name="pass"]', 'Navya@123');

    await page.click('button[name="login"]');

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveTitle(/Facebook/);
});