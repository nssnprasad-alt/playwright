import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


Given(
  'Login a Facebook application with valid credientials {string} and {string}',
  async function (username, password) {

    await this.page.goto("https://www.facebook.com", {
      waitUntil: "domcontentloaded"
    });

    await this.page.locator('input[name="email"]').fill(username);

    await this.page.locator('input[name="pass"]').fill(password);

  }
);

When('Click on login button', async function () {

  await this.page.click('button[name="login"]');

  await this.page.waitForLoadState('networkidle');

});

Then('vertify user is able to login successfully', async function () {

  await expect(this.page).toHaveTitle(/Facebook/);

});