class PurchaseProduct {
    constructor(page) {
        this.page = page;
        this.placeOrder = page.getByRole("button", { name: "Place Order" });
        this.name = page.locator("#name");
        this.country = page.locator("#country");
        this.city = page.locator("#city");
        this.card = page.locator("#card");
        this.month = page.locator("#month");
        this.year = page.locator("#year");
        this.purchase = page.getByRole("button", { name: "Purchase" });
        this.clickOK = page.getByRole("button", { name: "OK" });
        this.items = page.locator(".success");
        this.delCart = page.getByRole("link", { name: 'Delete' });

    }
    async clickOnPlaceOrder() {
        await this.placeOrder.click();
    }
    async addDetails(name,country,city,card,month,year) {
        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.card.fill(card);
        await this.month.fill(month);
        await this.year.fill(year);
        await this.purchase.click();
    }
    async clickOKbtn() {
        await this.clickOK.click();
    }
    async deleteOtherItems(item) {
        const rows = this.page.locator("#tbodyid tr");
        let productFound = false;

        for (let i = await rows.count() - 1; i >= 0; i--) {
            const row = rows.nth(i);
            const productName = (
                await row.locator("td").nth(1).textContent()
            ).trim();

            if (productName === item && !productFound) {
                // Keep the first matching product
                productFound = true;
            } else {
                // Delete everything else
                await row.getByRole("link", { name: "Delete" }).click();
            }
        }
    }
}
module.exports = PurchaseProduct;