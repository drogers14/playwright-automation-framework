import { expect, Page, Locator } from '@playwright/test';

export class ProductDescPage {
    readonly page: Page;
    readonly productTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTitle = page.locator('h1', {hasText: 'Grey jacket'});
    }

    async goto(){
        await this.page.goto('./collections/frontpage/products/grey-jacket');
    }

    async verifyProductHeader(){
        await expect(this.productTitle).toBeVisible();
    }
  
}