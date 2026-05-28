import { test, expect } from '@playwright/test';
import { SignUpPage,  } from '../../pages/account/signup.page.ts';

test('user can login to account', async ({ page }, testInfo) => {

    await page.goto('/account/login');
})

test('user can sign up for new account', async ({ page }, testInfo) => {
    const signUpPage = new SignUpPage(page);
    // const accountPage = new AccountPage(page);
    await signUpPage.goto();

    console.log('Filling in account information');
    await signUpPage.firstNameField.fill('Test');
    await signUpPage.lastNameField.fill('Test');
    await signUpPage.emailAddressField.fill('Test@gmail.com');
    await signUpPage.passwordField.fill('Password1');
    console.log('Clicking Create button');

    await signUpPage.createAccountButton.click();

})