import { test, expect } from '@playwright/test';
import authorizationPage from "../pages/authorization.test"
import addProduct from "../pages/addProduct.test"
import orderPage from "../pages/goToOrder.test"
import orderCash from "../pages/orders.test"
import badPromo from "../pages/checkBadPromo.test"

// Переменная для хранения состояния авторизации
let isAuthenticated = false;

test.beforeEach("Authorization", async ({ page, }) => {
    if (!isAuthenticated) {
        // Если нет, то выполняем процесс авторизации
        const auth = new authorizationPage(page)
        await page.goto('/')
        await auth.enterTel("+7 (000) 00 0000")
        await auth.enterPin("0000")

        // Проверяем, что авторизация прошла успешнощщщщщ
        await page.locator('[data-test-id="header-profile-btn"]').click();
        // Дождаться, пока элемент с классом "cabinet__user-name" будет видимым
        await page.waitForSelector('.cabinet__user-name');

        // Получить текст элемента
        const text = await page.textContent('.cabinet__user-name');

        // Проверить, что текст равен ожидаемому
        await expect(text).toBe(' Привет, ТестАкулятор! ');
        isAuthenticated = true;
    }
})


test("CashOrder", async ({ page }) => {
    const addP = new addProduct(page)
    const goOrder = new orderPage(page)
    const cash = new orderCash(page)
    const promoB = new badPromo(page)
    await page.goto('/')
    await addP.addProduct()
    await goOrder.goToOrder()
    await cash.orderCash()
    await promoB.checkBadPromo()
})

test("CardOrder", async ({ page }) => {
    const addP = new addProduct(page)
    const goOrder = new orderPage(page)
    const cash = new orderCash(page)
    const promoB = new badPromo(page)
    await page.goto('/')
    await addP.addProduct()
    await goOrder.goToOrder()
    await cash.orderCard()
    await promoB.checkBadPromo()
})

//test