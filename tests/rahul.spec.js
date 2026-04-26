import { test, expect } from '@playwright/test';
test("Rahul's Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("#login").click();

    await expect(page).toHaveTitle(/Rahul Shetty Academy/);
    await page.waitForLoadState('networkidle');

    //await page.locatorlocator(".card-body b").first().click();

    await page.locator(".card-body b").first().waitFor();


    const productTitles = await page.locator(".card-body b").allTextContents();
    console.log(productTitles);
});