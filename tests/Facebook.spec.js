import { test, expect } from "@playwright/test";

test("Facebook Login Test", async ({ page }) => {

    console.log("Test running...");

    await page.goto("https://www.facebook.com", {
        waitUntil: "domcontentloaded"
    });

    
});