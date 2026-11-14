import { Page } from "@playwright/test"
export default class addProduct {

    constructor(public page: Page) {


    }
    async addProduct() {

        await this.page.locator('div:nth-child(5) > .v-collection__wrapper > .v-collection__slider > .v-dish-slider > .v-h-nav--wrapper > .v-h-nav > .v-h-nav--inner > div:nth-child(4) > .dish > div > div:nth-child(3) > .v-button').click();
        await this.page.locator('div:nth-child(5) > .v-collection__wrapper > .v-collection__slider > .v-dish-slider > .v-h-nav--wrapper > .v-h-nav > .v-h-nav--inner > div:nth-child(4) > .dish > div > div:nth-child(3) > .v-button').click();
        await this.page.locator('div:nth-child(6) > .v-dish-slider > .v-h-nav--wrapper > .v-h-nav > .v-h-nav--inner > div:nth-child(2) > .dish > div > div:nth-child(3) > .v-button').click();

    }
}