const { Given, Then, When, setDefaultTimeout } = require("@cucumber/cucumber");
const POManager = require("../../PageObject/POManager");
const { expect } = require("@playwright/test");
setDefaultTimeout(30 * 1000);
Given("I am logged in to the site", async function () {
    this.pomanager = new POManager(this.page);
    this.login = this.pomanager.getLogin();
    this.cart = this.pomanager.getCart();
    this.purchase = this.pomanager.getPurchase();
    await this.login.loginClick();
});
When("I login with correct username {string} and password {string}", async function (username, password) {
    await this.login.validLogin(username, password);
});
When("I select the product {string} and add to the cart", async function (product) {
    await this.page.waitForTimeout(3000);
    await this.cart.clickOnPdt(product);
    await this.cart.clickOnAddtoCart();
});
Then("the product should be added successfully to the cart", async function () {
    const message = await this.cart.dialogboxClk();
    console.log(message);
    await expect(message).toBe("Product added.");
});
When("I open the cart menu", async function () {
    await this.cart.clickOnCartMenu();
});
Then("the selected product {string} should be displayed in the cart", async function (product) {
    await this.page.waitForTimeout(3000);
    await expect(this.page.locator("#tbodyid").getByText(product)).toBeVisible();

});
When("I click on the Place Order button", async function () {
    await this.purchase.clickOnPlaceOrder();
});
When("I add the details like {string},{string},{string},{string},{string},{string} to place the Order and click on the purchase button",
     async function (name,country,city,card,month,year) {
    await this.purchase.addDetails(name,country,city,card,month,year);

});
Then("the Thank you for your purchase! should be displayed", async function () {
    await expect(this.page.getByRole("heading", { name: "Thank you for your purchase!" })).toBeVisible();

});
Then("choosing the OK button will redirect to homepage", async function () {
    await this.page.waitForTimeout(3000);
    await this.purchase.clickOKbtn();
    await this.cart.clickOnCartMenu();
    await this.cart.deleteItemfromCart();

});



