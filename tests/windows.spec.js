// import { test, expect, request, chromium } from '@playwright/test';
// test('child window handling', async () => {

//     const browser = await chromium.launch({
//         headless: false,
//         slowMo: 1000
//     });

//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://demoqa.com/browser-windows");

//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         page.locator('#tabButton').click()
//     ]);

//     await newPage.waitForLoadState();

//     console.log(await newPage.locator('h1').textContent());

//     await page.waitForTimeout(5000); // 👈 keep open
// });