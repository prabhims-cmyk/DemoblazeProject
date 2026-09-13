import { Page } from "@playwright/test";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { PurchaseProduct } from "./PurchaseProduct";

export class POManager {
    page : Page
    sign : SignUp
    login : Login
    cart : Cart
    purchase : PurchaseProduct
    constructor(page : Page) {
        this.page = page;
        this.sign = new SignUp(page);
        this.login = new Login(page);
        this.cart = new Cart(page);
        this.purchase = new PurchaseProduct(page);
    }
    getSignup() {
        return this.sign;
    }
    getLogin(){
        return this.login;
    }
    getCart(){
        return this.cart;
    }
    getPurchase(){
        return this.purchase;
    }
}
//module.exports = POManager;