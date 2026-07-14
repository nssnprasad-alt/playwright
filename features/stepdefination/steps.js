import { Given, When, Then } from "@cucumber/cucumber";
import { PageObjectManager } from "../../FrameworkDesign/PageObjectManager.js";
import { chromium, expect } from "@playwright/test";

Given('Login a Ecomerce application with valid  {string} and {string}',{timeout:100*1000}, async function (username, password) {
  
  const products =this.page.locator(".card-body b");

  const loginPage = this.pageObjectManager.getLoginPage();
  await loginPage.goto();
  await loginPage.login(username, password);
});

When('Add {string} to the cart and checkout', async function (productName) {
  this.dashboard = this.pageObjectManager.getDashboardPage();
  await this.dashboard.addProductToCart(productName);
  await this.dashboard.gotoCart();
});

Then('Verify {string} is displayed in the cart', async function (productName) {
  const checkout = this.pageObjectManager.getCheckOutPage();
  await checkout.gotoCheckout();
});

When('Enter valid details and place the order', async function () {
  const paymentPage = this.pageObjectManager.getPaymentPage();
  await paymentPage.selectCountry("India");
  await paymentPage.placeOrder();
});

Then('verify order in present in OrderHistoryPage', async function () {
    

  const thanksPage = this.pageObjectManager.getThanksPage();
  const message = await thanksPage.getThanksMessage();
  console.log(message);
  await expect(thanksPage.thanksMessage).toHaveText('Thankyou for the order.');
});
