import { Locator,Page } from "@playwright/test"; 
export class Login{
    page : Page
    login : Locator
    loginUsername : Locator
    loginPassword : Locator
    loginBtn : Locator
    logincloseBtn : Locator
    logout : Locator
    constructor(page :Page){
        this.page = page;
        this.login = page.locator("#login2");
        this.loginUsername =  page.locator("#loginusername");
        this.loginPassword =  page.locator("#loginpassword");
        this.loginBtn =  page.getByRole("button",{name:'Log in'});
        this.logincloseBtn =  page.getByRole("dialog", { name: "Log in" }).getByText("Close");
        this.logout = page.locator("#logout2");
    }
    async goto(){
        await this.page.goto(" https://www.demoblaze.com");
    }
    async loginClick(){
        await this.login.click();
    }
    async validLogin(uName : string,pass : string){
        await this.loginUsername.fill(uName);
        await this.loginPassword.fill(pass);
        await this.loginBtn.click();
    }
    async dialogboxClk() {
        const dialogPromise = this.page.waitForEvent("dialog");
        const dialog = await dialogPromise;
        const message = dialog.message();
        await dialog.accept();
        return message;
    }
    async logoutClick(){
        await this.logout.click();
    }
}
//module.exports = Login;