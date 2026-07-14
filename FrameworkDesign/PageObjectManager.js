import { LoginPage } from './LoginPage.js';
import { DashBoard } from './DashBoard.js';
import { CheckOut } from './CheckOut.js';
import { PaymentPage } from './PaymentPage.js';
import { ThanksPage } from './ThanksPage.js';
export class PageObjectManager {

    constructor(page) {

        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboard = new DashBoard(page);
        this.checkOut = new CheckOut(page);
        this.paymentPage = new PaymentPage(page);
        this.thanksPage = new ThanksPage(page);
    }

    getLoginPage() {

        return this.loginPage;
    }

    getDashboardPage() {

        return this.dashboard;
    }



    getCheckOutPage() {

        return this.checkOut;
    }

    getPaymentPage() {

        return this.paymentPage;
    }

    getThanksPage() {

        return this.thanksPage;
    }
}