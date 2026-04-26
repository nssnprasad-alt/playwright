const{test,expect} =require('@playwright/test');
test('my test',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://www.google.com/");
    // await page.goBack();
    // await page.goForward();
    // await page.reload();

    // await expect(page.locator("#displayed-text")).toBeVisible();
    // await expect(page.locator("#displayed-text")).toBeHidden();

    page.on('dialog',dialog=>{dailog.accept()});
    await page.pause();
    page.locator("#confirmbtn").click();





});
