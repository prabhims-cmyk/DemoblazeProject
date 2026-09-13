const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

Before(async function () {
    console.log("I am first");
    const browser = await chromium.launch({headless:false}); // create browser object
    const context = await browser.newContext(); // create context object
    this.page = await context.newPage(); // create page object //this.page will become a world variable{same as global variable}
    await this.page.goto("https://www.demoblaze.com/");

})
After(async function () {
    console.log("I am last");
})
AfterStep(async function ({result}) {
    if(result.status===Status.FAILED){
        const buffer = await this.page.screenshot();
        await this.page.screenshot({path:'screenshot1.png'});
        this.attach(buffer.toString('base64'),'base64:image/png');
        console.log("Screenshot logged");
    }
})