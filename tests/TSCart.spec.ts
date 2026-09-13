import {test,expect} from "@playwright/test";
import { POManager } from "../PageObjectTS/POManager";
const loginData = JSON.parse(JSON.stringify(require('../utils/LoginTestData.json')));

test("TC07: Select a product Add to Cart Click ok on the popup ",async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  let cart = pomanager.getCart();  await login.goto();
  await login.loginClick();
  await login.validLogin(loginData.correctUsername,loginData.correctPassword);
  await page.waitForTimeout(3000);
  await cart.clickOnPdt(loginData.product);
  await cart.clickOnAddtoCart();
  const message = await cart.dialogboxClk();
  console.log(message);
  await expect(message).toBe("Product added.");
  await cart.clickOnCartMenu();
  await expect(page.locator("#tbodyid").getByText(loginData.product)).toBeVisible();
  await cart.deleteItemfromCart();
  await context.close();
})

