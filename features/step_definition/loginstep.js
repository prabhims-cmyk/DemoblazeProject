const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const POManager = require("../../PageObject/POManager");
const { expect } = require("@playwright/test");
setDefaultTimeout(30 * 1000);

// SCENARIO 1: Signup with username and password
Given("I am on the login page", async function () {
    // Create POManager object
    this.pomanager = new POManager(this.page);
    this.login = this.pomanager.getLogin();
    await this.login.loginClick();
});


When("I signup with a valid username {string} and password {string} and click on login button", async function (username, password) {
    await this.login.validLogin(username, password);
});


Then("the login should be successfull and Welcome {string} user should be shown", async function (username) {
    const message =   await expect(this.page.locator("#nameofuser").isVisible("Welcome"+username));
    console.log("Message: " + message);
});

//Scenario 2:Login with invalid username and valid password

When("I login with a invalid username {string} and valid password {string} and click on login button", async function (username1, password1) {
    await this.login.validLogin(username1, password1);
});


Then("the login should show error message User does not exist", async function () {
    const message = await this.login.dialogboxClk();
    console.log(message);
    expect(message).toBe("User does not exist.");
});

//Scenario 3:Login with invalid username and invalid password 
When("I login with a invalid username {string} and invalid password {string} and click on login button", async function (username1, password1) {
    await this.login.validLogin(username1, password1);
});


Then("the login should show error message User does not exist.", async function () {
    const message = await this.login.dialogboxClk();
    console.log(message);
    expect(message).toBe("User does not exist.");
});

//Scenario 4:Login with valid credentials and logout
When("I login with a valid username {string} and password {string} and click on logout button", async function (username, password) {
    await this.login.validLogin(username, password);
    await this.login.logoutClick();
});
/*Then("the signup menu should be seen", async function () {

    await expect(this.page.locator("#login2").isVisible());
});*/


