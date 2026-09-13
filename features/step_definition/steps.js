const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const POManager = require("../../PageObject/POManager");
const { expect } = require("@playwright/test");
setDefaultTimeout(30 * 1000);

// SCENARIO 1: Signup with username and password
Given("I am on the signup page", async function () {

    // Create POManager object
    this.pomanager = new POManager(this.page);
    // Get Signup Page Object
    this.sign = this.pomanager.getSignup();
    // Click Signup menu
    await this.sign.signUpClick();
});

When("I signup with a random username and password", async function () {

    const username =
        "userpms" + Math.floor(Math.random() * 1000);
    const password =
        "pass@pms" + Math.floor(Math.random() * 1000);
    console.log("Username: " + username);
    console.log("Password: " + password);
    await this.sign.validLogin(username, password);
});

Then("the signup should be successful", async function () {
    const message = await this.sign.dialogboxClk();
    console.log("Message: " + message);
});

// SCENARIO 2: Signup and click Close
When("I signup with a random username and password and click on the close button", async function () {

    const username =
        "userpms" + Math.floor(Math.random() * 1000);
    const password =
        "pass@pms" + Math.floor(Math.random() * 1000);
    console.log("Username: " + username);
    console.log("Password: " + password);
    await this.sign.validLogin(username, password);
    await this.sign.closeClick();
});


Then("the signup menu should be seen", async function () {
       
    await expect(this.page.locator("#signin2")).toBeVisible();     
    console.log("Signup menu is displayed");
});