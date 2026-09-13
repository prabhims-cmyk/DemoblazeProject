const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const POManager = require("../../PageObject/POManager");
const { expect } = require("@playwright/test");
setDefaultTimeout(30 * 1000);
Given("I am logged in and ready to shop", async function () {
    this.pomanager = new POManager(this.page);
    this.login = this.pomanager.getLogin();
    this.cart = this.pomanager.getCart();
    await this.login.loginClick();
});
When("I login with valid username {string} and valid password {string}", async function (username, password) {
    await this.login.validLogin(username, password);
});
When("I select the product {string}", async function (product) {
    await this.page.waitForTimeout(3000);
    await this.cart.clickOnPdt(product);

});
When("I add the product to cart", async function () {
    await this.cart.clickOnAddtoCart();
});
Then("the product should be added successfully", async function () {
    const message = await this.cart.dialogboxClk();
    console.log(message);
    await expect(message).toBe("Product added.");
});
When("I open the cart", async function () {
    await this.cart.clickOnCartMenu();

});
Then("the product {string} should be displayed in the cart", async function (product) {
    await expect(this.page.locator("#tbodyid").getByText(product)).toBeVisible();

});
When("I delete the product from the cart", async function () {
    await this.cart.deleteItemfromCart();
});
Then("the product should be removed from the cart", async function () { });



