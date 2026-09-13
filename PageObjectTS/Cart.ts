import { Locator,Page } from "@playwright/test";
export class Cart {
    page : Page
    pdtName : Locator
    addToCart : Locator
    cartMenu : Locator
    delCart : Locator
    monitor : Locator
    constructor(page : Page) {
        this.page = page;
        this.pdtName = page.locator(".card-title");
        this.addToCart = page.getByRole("link", { name: 'Add to cart' });
        this.cartMenu = page.locator("#cartur");
        this.delCart = page.getByRole("link", { name: 'Delete' });
        this.monitor = page.getByRole("link", { name: 'Monitors' });
    }
    async clickonMonitors(productName : string) {
        await this.monitor.click();
        const product = this.page.getByRole("link", { name: productName });
        await product.click();

    }
    async clickOnPdt(productName : string) {
        const titles = await this.pdtName.allTextContents();
        console.log(titles);
        const count = await this.pdtName.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            if (await this.pdtName.nth(i).textContent() === productName) {
                await this.pdtName.nth(i).click();
                break;
            }
        }
    }
    async clickOnAddtoCart() {
        await this.addToCart.click();
    }
    async dialogboxClk() {
        const dialogPromise = this.page.waitForEvent("dialog");
        const dialog = await dialogPromise;
        const message = dialog.message();
        await dialog.accept();
        return message;
    }
    async clickOnCartMenu() {
        await this.cartMenu.click();
    }
    async deleteItemfromCart() {
        const count = await this.delCart.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            await this.delCart.nth(i).click();
        }
        await this.page.waitForTimeout(3000);
    }
}
//module.exports = Cart;