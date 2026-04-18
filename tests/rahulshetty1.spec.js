const { test, expect } = require('@playwright/test');

test('rahulshetty - E2E Order Flow', async ({ page }) => {

    const email = "abc@gmail.com";
    const productName = 'iphone 13 pro';
    const password ="pl@ywright";
    // Launch application
    await page.goto("https://rahulshettyacademy.com/client");

    // Login
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();

    // Wait for products to load
    await page.waitForLoadState('networkidle');

    // Get all products
    const products = page.locator('.card-body');
    const count = await products.count();

    // Add product to cart
    for (let i = 0; i < count; i++) {
        const title = await products.nth(i).locator("b").textContent();

        if (title.trim() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

    // Go to cart
    await page.locator('[routerlink*="/cart"]').click();

    // Wait for cart items
    await page.locator("div li").first().waitFor();

    // Checkout
    await page.locator("text=Buy Now").click();

    // Select country using pressSequentially
    const countryInput = page.locator("input[placeholder='Select Country']");
    await countryInput.pressSequentially("india", { delay: 100 });

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

    // Place order
    await page.locator(".action__submit").click();

    // Validation
    await expect(page.locator(".hero-primary"))
        .toHaveText(" Thankyou for the order. ");

        await page.waitForTimeout(3000);

});