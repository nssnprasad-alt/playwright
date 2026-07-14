import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../FrameworkDesign/PageObjectManager';
//  import dataset from '../Utils/dataTest.json';

import dataTest from "../Utils/dataTest.json" assert { type: "json" };
const data = dataTest;

for(const userData of data){

test(`rahulshetty - E2E Order Flow - ${userData.username}`, async ({ page }) => {

    // // test data
    // const email = ;
    // const password = dataset.password;
    // const productName = dataset.productname;

    // Launch application and create page object manager
    const pageObjectManager = new PageObjectManager(page);

    const loginPage = pageObjectManager.getLoginPage();
    const dashboard = pageObjectManager.getDashboardPage();
    const checkout = pageObjectManager.getCheckOutPage();
    const paymentPage = pageObjectManager.getPaymentPage();
    const thanksPage = pageObjectManager.getThanksPage();

    // Login
    await loginPage.goto();
    await loginPage.login(userData.username, userData.password);

    // Add product and go to cart
    await dashboard.addProductToCart(userData.productname);
    await dashboard.gotoCart();

    // Checkout and place order
    await checkout.gotoCheckout();

    await paymentPage.selectCountry("India");
    await paymentPage.placeOrder();

    // Thanks page validation
    const message = await thanksPage.getThanksMessage();

    console.log(message);

    await expect(thanksPage.thanksMessage)
        .toHaveText(' Thankyou for the order. ');
});
}