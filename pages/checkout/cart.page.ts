/* ... */
import { expect, Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartHeader = page.locator('h1', {hasText: 'My Cart'});
    }

    async goto(){
        await this.page.goto('./cart');
    }

    async verifyCartHeader(){
        await expect(this.cartHeader).toBeVisible();
        
    }
  
}