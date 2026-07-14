import { Before,After,BeforeAll,AfterAll, AfterStep, Status } from "@cucumber/cucumber";
import { PageObjectManager } from "../../FrameworkDesign/PageObjectManager.js";
import { chromium } from "@playwright/test";



Before({tags:'@regression'}, async function () {

    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    this.page = await context.newPage();

    this.pageObjectManager = new PageObjectManager(this.page);

});

After(async function () {
    console.log("After hook");

})

AfterStep(async function(result){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path:'failure.png'});
    }

})