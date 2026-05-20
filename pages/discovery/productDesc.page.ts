import { expect, Page, Locator } from '@playwright/test';

export class ProductDescPage {
    readonly page: Page;
    readonly productTitle: Locator;
    addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('h1', { hasText: 'Grey jacket' });
        this.addToCartButton = page.locator('#add');

    }

    async goto() {
        await this.page.goto('./collections/frontpage/products/grey-jacket');
    }

    async verifyProductHeader() {
        await expect(this.productTitle).toBeVisible();
    }

    async addToCart() {
        await this.addToCartButton.click();
        const itemTotal = await this.page.locator('//*[@id="cart-target-desktop"]');
        await expect(itemTotal).toContainText('1');
        // await itemTotal.waitFor({ state: 'visible',timeout: 6000 });
        // await browser_wait_for { time: 3 };
        const itemTotalValue = await itemTotal.innerText();
        console.log('Item count total: ' + itemTotalValue);
        // const result = itemTotalValue.replace(/[()]/g, '');
        // await expect(result).toBeGreaterThanOrEqual(1);
    }
}