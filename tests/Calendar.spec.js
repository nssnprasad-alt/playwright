const{test,expect}=require('@playwright/test');
test('Calendar test',async({page})=>{
    const month="May";
    const year="2024";
    const date="20";
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.getByText(month).click();
    await page.locator("//abbr[text()=" +date+"]").click();
    


});