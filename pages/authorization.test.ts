import { Page } from "@playwright/test"
export default class authorizationPage {

    constructor(public page: Page) {


    }
    async enterTel(tel: string) {
        await this.page.locator('[data-test-id="cookies-button"]').click();
        await this.page.locator('[data-test-id="header-profile-btn"]').click();
        await this.page.locator('[data-test-id="input-auth-phone"]').fill(tel);
        await this.page.locator('[data-test-id="input-auth-phone"]').click();
        await this.page.locator('[data-test-id="auth-submit-btn"]').click();
    }
    async enterPin(pin: string) {
        await this.page.locator('[data-test-id="input-auth-code"]').fill(pin);
        await this.page.locator('[data-test-id="auth-submit-btn"]').click();
        await this.page.locator('[data-test-id="header-profile-btn"]').click();
        await this.page.locator('[data-test-id="header-logo"]').click();
    }
} бы