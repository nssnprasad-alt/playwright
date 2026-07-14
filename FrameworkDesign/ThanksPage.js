export class ThanksPage {

    constructor(page) {

        this.page = page;
        this.thanksMessage = page.locator('.hero-primary');
    }

    async getThanksMessage() {

        return await this.thanksMessage.textContent();
    }
}