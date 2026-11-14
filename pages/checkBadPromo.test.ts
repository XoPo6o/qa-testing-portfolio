import { Page } from "@playwright/test"
export default class badPromo {

    constructor(public page: Page) {


    }
    async checkBadPromo() {
        await this.page.locator('[data-test-id="promo-input"]').fill('КакойтоКорявыйПромо12;,:(dssdv*(');
        await this.page.locator('[data-test-id="promo-submit-btn"]').click();
        await this.page.getByText('Проверьте правильность ввода, сейчас промокод прописан на латинице и кириллице').first().click();
        await this.page.getByText('Данного промокода не существует').first().click();
        await this.page.locator('[data-test-id="promo-cancel-btn"]').click();

    }
}