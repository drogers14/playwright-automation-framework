import { expect, Page, Locator } from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly accountHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.accountHeader = page.locator('h1', {hasText: 'Customer Login'});

    }
    async goto(){
        await this.page.goto('.');
        try{
            await expect(this.accountHeader).toBeVisible();
            console.log('Verifying page header: Create Account');
        } catch(error){
            console.log(`Failed to verify page header: ${error.message}`);
            throw new Error('Failed to verify page header');
        }
    }
  
}