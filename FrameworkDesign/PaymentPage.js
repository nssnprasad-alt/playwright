export class PaymentPage {

    constructor(page) {

        this.page = page;

        this.country = page.locator("input[placeholder='Select Country']");
        this.dropdown = page.locator(".ta-results");
    }

    async selectCountry(countryName) {

        await this.country.pressSequentially(countryName);

await this.dropdown
    .locator('button')
    .filter({ hasText: countryName })
    .last()
    .click();
    }
    async placeOrder(){
        await this.page.locator("text=Place Order").click();
    }
}