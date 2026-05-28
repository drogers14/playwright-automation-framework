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

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    await signUpPage.createAccountButton.click();
    // const popupPromise = page.waitForEvent('popup');

    // const popup = await popupPromise;

    const closeButton = page.getByTestId(
        'authorize-modal-close-button'
    );

    await closeButton.click();

    console.log('Closed pop up');
    const screenshot1 = await page.screenshot();
    await testInfo.attach('screenshot1', { body: screenshot1, contentType: 'image/png' });

    const captchaFrame = page.locator('iframe[title="hCaptcha challenge"]').contentFrame();

    if (await captchaFrame.getByRole('button', {name: 'Skip Challenge',}).isVisible()) {
        await captchaFrame.getByRole('button', {name: 'Skip Challenge',}).click();
        console.log('Skipped captcha.');
    }
    // await expect(page).toHaveURL('https://sauce-demo.myshopify.com/');

})