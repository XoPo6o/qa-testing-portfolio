import { Page } from "@playwright/test"
export default class goOrder {

    constructor(public page: Page) {


    }
    async goToOrder() {
        await this.page.locator('[data-test-id="header-basket-btn"]').click();
        await this.page.locator('[data-test-id="cart-submit-button"]').click();
    }
}