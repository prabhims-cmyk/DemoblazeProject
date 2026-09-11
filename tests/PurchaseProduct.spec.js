import {test,expect} from "@playwright/test";
import Cart from "../PageObject/Cart";
import Login from "../PageObject/Login";
//import PurchaseProduct from "../PageObject/PurchaseProduct";
import POManager from "../PageObject/POManager";
import { customtest } from "../utils/BaseTest";
const loginData = JSON.parse(JSON.stringify(require('../utils/LoginTestData.json')));

test("@cart TC08: Select a product from phone Add to Cart Click ok on the popup Add details and Purchase  ",async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  let cart = pomanager.getCart();
  let purchase = pomanager.getPurchase();
  await login.goto();
  await login.loginClick();
  await login.validLogin(loginData.correctUsername,loginData.correctPassword);
  await page.waitForTimeout(3000);
  await cart.clickOnPdt(loginData.phone);
  await cart.clickOnAddtoCart();
  const message = await cart.dialogboxClk();
  console.log(message);
  await expect(message).toBe("Product added.");
  await cart.clickOnCartMenu();
  await page.waitForTimeout(3000);
  await expect(page.locator("#tbodyid").getByText(loginData.phone)).toBeVisible();
  await purchase.clickOnPlaceOrder();
  await purchase.addDetails(loginData.name,loginData.country,loginData.city,loginData.card,loginData.month,loginData.year);
  await expect(page.getByRole("heading", { name: "Thank you for your purchase!" })).toBeVisible();  
  await page.waitForTimeout(3000);
  await purchase.clickOKbtn(); 
  await context.close();
})

test("@cart TC09: Select a product from monitor Add to Cart Click ok on the popup Add details and Purchase  ",async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  let cart = pomanager.getCart();
  let purchase = pomanager.getPurchase();
  await login.goto();
  await login.loginClick();
  await login.validLogin(loginData.correctUsername,loginData.correctPassword);
  await page.waitForTimeout(3000);
  await cart.clickonMonitors(loginData.monitor);
  await cart.clickOnAddtoCart();
  const message = await cart.dialogboxClk();
  console.log(message);
  await expect(message).toBe("Product added.");
  await cart.clickOnCartMenu();
  await expect(page.locator("#tbodyid").getByText(loginData.monitor)).toBeVisible();
  await purchase.clickOnPlaceOrder();
  await purchase.addDetails(loginData.name,loginData.country,loginData.city,loginData.card,loginData.month,loginData.year);
  await expect(page.getByRole("heading", { name: "Thank you for your purchase!" })).toBeVisible();  
  await page.waitForTimeout(3000);
  await purchase.clickOKbtn(); 
  await context.close();
})

