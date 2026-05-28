import { expect, Page, Locator } from '@playwright/test';

export class SignUpPage {
    readonly page: Page;
    readonly signUpHeader: Locator;
    firstNameField: Locator;
    lastNameField: Locator;
    emailAddressField: Locator;
    passwordField: Locator;
    createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpHeader = page.locator('h1', {hasText: 'Create Account'});
        this.firstNameField = page.locator('//*[@id="first_name"]').nth(1);
        this.lastNameField = page.locator('//*[@id="last_name"]').nth(1);
        this.emailAddressField = page.locator('//*[@id="email"]' ).nth(1);
        this.passwordField = page.locator('//*[@id="password"]').nth(1);
        this.createAccountButton = page.getByRole('button', {name: 'Create'})
    }

    async goto(){
        await this.page.goto('./account/register');
        try{
            await expect(this.signUpHeader).toBeVisible();
            console.log('Verifying page header: Create Account');
        } catch(error){
            console.log(`Failed to verify page header: ${error.message}`);
            throw new Error('Failed to verify page header');
        }
    }
}