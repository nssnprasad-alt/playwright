import { test, expect, request, chromium } from '@playwright/test';
test('slow execution', async () => {

    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });

const page = await browser.newPage();

    await page.goto("https://letcode.in/dropdowns");

    const fruits = page.locator("#fruits");
    await fruits.selectOption("2");

      //Select by LABEL (visible text)
    await fruits.selectOption({ label: "Mango" });

    // Get selected text message
    const selectedText = await page.locator("p.subtitle").nth(1).textContent();

    console.log(selectedText);

});