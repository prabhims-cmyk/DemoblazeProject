class SignUp{
    constructor(page){
        this.page = page;
        this.signUp = page.locator("#signin2");
        this.userName =  page.locator("#sign-username");
        this.passWord =  page.locator("#sign-password");
        this.signupBtn =  page.getByRole("button",{name:'Sign up'});
        this.closeBtn =  page.getByRole("dialog", { name: "Sign up" }).getByText("Close");

    }
    async signUpClick(){
        await this.signUp.click();
    }
    async validLogin(uName,pass){
        await this.userName.fill(uName);
        await this.passWord.fill(pass);
        await this.signupBtn.click();
    }
    async dialogboxClk(){
    const dialogPromise = this.page.waitForEvent("dialog");
    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();
    return message;
    }
    async closeClick(){
        await this.closeBtn.click();
    }
}
module.exports = SignUp;