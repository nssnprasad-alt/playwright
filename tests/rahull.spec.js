import { test, expect } from '@playwright/test';test('Rahul test',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.locator('input[name="name"]').first().fill("Navya");
    await page.locator('input[name="email"]').fill("navya.nallam@gmail.com");
    //await page.getByLabel("Password").fill("Navya@123");
        await page.getByPlaceholder("Password").fill("Navya123");

    await page.getByText("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Male");

     await page.locator("#inlineRadio1").last().click();
    // await page.getByLabel("Date of Birth").fill("01/01/1990");
    await page.getByRole("button",{name:"Submit"}).click();
    await expect(page.locator("text=successfully")).toBeVisible();

    await page.getByText("Shop").click();
    await page.locator(".card-body").first().waitFor();
    await page.locator("app-card").filter({hasText:"Blackberry"}).getByRole("button").click()
    await page.getByText("Checkout").click();//
    await page.getByRole("button",{name:"Checkout"}).click();
// await page.getByRole("button",{name:"Checkout"}).click();
 

    await page.getByRole('checkbox', { name: /term/i }).check();

await expect(page.getByRole('button', { name: "Purchase" })).toBeEnabled();

await page.getByRole('button', { name: "Purchase" }).click();

await expect(page.locator(".alert-success")).toContainText("Success");


});
