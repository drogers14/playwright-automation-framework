/* ... */
import { expect, Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartHeader: Locator;
    qty: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cartHeader = page.locator('h1', {hasText: 'My Cart'});
        this.qty = page.locator('(//*[@name="updates[]"])[2]');
    }

    async goto(){
        await this.page.goto('./cart');
    }

    async verifyCartHeader(){
        await expect(this.cartHeader).toBeVisible();
        
    }

    async verifyCartQty(total){
        await expect(this.qty).toBeVisible();
        console.log('Cart Total Qty: ' + await this.qty.inputValue());
        await expect(this.qty).toHaveValue(total);


    }
  
}