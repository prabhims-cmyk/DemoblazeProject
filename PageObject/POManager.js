const SignUp = require("./SignUp");
const Login = require("../PageObject/Login");
const Cart = require("../PageObject/Cart");
const PurchaseProduct = require("./PurchaseProduct");


class POManager {
    constructor(page) {
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
module.exports = POManager;