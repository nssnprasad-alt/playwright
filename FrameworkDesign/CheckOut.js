export class CheckOut {

    constructor(page) {

        this.page = page;
        this.checkout = page.locator('text=Checkout');
    }

    async gotoCheckout() {

        await this.checkout.click();
    }
}