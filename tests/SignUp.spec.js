import {test,expect} from "@playwright/test";
//import SignUp from "../PageObject/SignUp";
import Login from "../PageObject/Login";
import POManager from "../PageObject/POManager";
import { customtest } from "../utils/BaseTest";

customtest("TC01: Enter the username and password and click signup",async({page,testDataSignUp})=>{
  let pomanager = new POManager(page);
  let sign = pomanager.getSignup();
  await sign.signUpClick();
  await sign.validLogin(testDataSignUp.username,testDataSignUp.password);
  const message = await sign.dialogboxClk();
  console.log(message);
  expect(message).toBe("Sign up successful.");
})

customtest("TC02:Enter the username and password and click close",async({page,testDataSignUp})=>{
  let pomanager = new POManager(page);
  let sign = pomanager.getSignup();
  await sign.signUpClick();
  await sign.validLogin(testDataSignUp.username,testDataSignUp.password);
  await sign.closeClick();
  await expect(page.locator("#signin2")).toBeVisible();
})

