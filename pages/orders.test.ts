import { Page } from "@playwright/test"
export default class orderPage {

    constructor(public page: Page) {


    }
    async orderCash() {
        await this.page.locator('[data-test-id="order-input-comment"]').fill('Тест не готовить Автоматический заказ Наличкой');
        await this.page.locator('[data-test-id="order-input-comment"]')
        await this.page.locator('[data-test-id="address-input"]').fill('красная площадь 3');
        await this.page.getByText('Красная площадь, 3Москва').click();
        await this.page.locator('[data-test-id="delivery-input-flat"]').fill('1');
        await this.page.locator('[data-test-id="delivery-input-door"]').fill('2');
        await this.page.locator('[data-test-id="delivery-input-floor"]').fill('3');
        await this.page.locator('[data-test-id="delivery-input-comment"]').fill('Коментарий курьеру');
        await this.page.locator('[data-test-id="payment-block-open-button"]').click();
        await this.page.locator('label').filter({ hasText: 'Наличными курьеру' }).locator('i').click();
        await this.page.locator('[data-test-id="text-field"]').fill('88888');
        await this.page.locator('[data-test-id="payment-modal-close-button"]').click();

    }
    async orderCard() {
        await this.page.locator('[data-test-id="order-input-comment"]').fill('Тест не готовить Автоматический заказ Наличкой');
        await this.page.locator('[data-test-id="order-input-comment"]')
        await this.page.locator('[data-test-id="address-input"]').fill('красная площадь 3');
        await this.page.getByText('Красная площадь, 3Москва').click();
        await this.page.locator('[data-test-id="delivery-input-flat"]').fill('1');
        await this.page.locator('[data-test-id="delivery-input-door"]').fill('2');
        await this.page.locator('[data-test-id="delivery-input-floor"]').fill('3');
        await this.page.locator('[data-test-id="delivery-input-comment"]').fill('Коментарий курьеру');
        await this.page.locator('[data-test-id="payment-block-open-button"]').click();
        await this.page.locator('label').filter({ hasText: 'Картой курьеру' }).locator('i').click();
        await this.page.locator('[data-test-id="payment-modal-close-button"]').click();

    }
}   