import { test, expect } from '@playwright/test';
test('rahulshetty', async ({ page }) => {

    const email = "anshika@gmail.com";
    const productName = 'iphone 13 pro';

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator('#login').click();

    // Wait until product cards are visible
    await page.waitForSelector('.card-body');

    const products = page.locator('.card-body');

    const count = await products.count();

    
    for (let i = 0; i < count; i++) {

        if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
    // Go to cart/dashboard
    await page.locator('[routerlink*="/cart"]').click();
    await page.locator("div li").first().waitFor();

    await page.locator("text=Buy Now").click();

  // Wait for country input (correct placeholder)
const countryInput = page.locator("input[placeholder='Select Country']");
await countryInput.waitFor();

// Type country
await countryInput.click();
await countryInput.pressSequentially("ind");

// Wait for dropdown options
await page.locator(".ta-results button").first().waitFor();

const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }

await placeOrderBtn.click();




});