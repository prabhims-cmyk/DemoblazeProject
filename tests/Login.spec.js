import {test,expect} from "@playwright/test";
import Login from "../PageObject/Login";
import POManager from "../PageObject/POManager";
import { customtest } from "../utils/BaseTest";
const loginData = JSON.parse(JSON.stringify(require('../utils/LoginTestData.json')));

customtest("TC03:Verify login with valid credentials",async({page})=>{
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  await login.loginClick();
  await login.validLogin(loginData.correctUsername,loginData.correctPassword);
  console.log("username:"+loginData.correctUsername);
  console.log("password:"+loginData.correctPassword);
  await expect(page.locator("#nameofuser").isVisible("Welcome"+loginData.correctUsername));
  await page.pause();
})

customtest("TC04:Verify login with invalid username and valid password ",async({page})=>{
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  await login.loginClick();
  await login.validLogin(loginData.wrongUsername,loginData.correctPassword);
  console.log("username:"+loginData.wrongUsername);
  console.log("password:"+loginData.correctPassword);
  const message = await login.dialogboxClk();
  console.log(message);
  expect(message).toBe("User does not exist."); 
  await page.pause();
})

customtest("TC05:Verify login with valid username and invalid password  ",async({page})=>{
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  await login.loginClick();
  await login.validLogin(loginData.correctUsername,loginData.wrongPassword);
  console.log("username:"+loginData.correctUsername);
  console.log("password:"+loginData.wrongPassword);
  const message = await login.dialogboxClk();
  console.log(message);
  expect(message).toBe("Wrong password."); 
  await page.pause();
})

customtest("TC06:Verify login with invalid username and invalid password ",async({page})=>{
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  await login.loginClick();
  await login.validLogin(loginData.wrongUsername,loginData.wrongPassword);
  console.log("username:"+loginData.wrongUsername);
  console.log("password:"+loginData.wrongPassword);
  const message = await login.dialogboxClk();
  console.log(message);
  expect(message).toBe("User does not exist."); 
  await page.pause();
})

customtest("TC10: Verify login with valid credentials and logout",async({page})=>{
  let pomanager = new POManager(page);
  let login = pomanager.getLogin();
  await login.loginClick();
  await login.validLogin(loginData.correctUsername,loginData.correctPassword);
  console.log("username:"+loginData.correctUsername);
  console.log("password:"+loginData.correctPassword);
  await login.logoutClick();
  await expect(page.locator("#login2").isVisible());
  await page.pause();
})
