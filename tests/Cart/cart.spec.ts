import { test, expect } from '@playwright/test';
import { CartPage,  } from '../../pages/checkout/cart.page.ts';
import { ProductDescPage } from '../../pages/discovery/productDesc.page.ts';

test('add item to cart', async ({ page }, testInfo) =>{
    const cartPage = new CartPage(page);
    const productDescPage = new ProductDescPage(page);

    console.log('Navigating to Homepage.');
    await page.goto('https://sauce-demo.myshopify.com/');
    
    // Expect a title "to contain" a substring.
    console.log('Verifying landing page title ');
    await expect(page).toHaveTitle(/Sauce Demo/);
    const product = page.locator('#product-1');
    await product.click();

    // Expects page to have a heading with the name of Grey jacket.
    console.log('Verify product page title');
    await expect(page.getByRole('heading', { name: 'Grey jacket' })).toBeVisible();

    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    // click on 'add to cart'
    console.log('Add to Cart is clicked');
    await productDescPage.addToCart();
    // Expect cart total to be 1 
    
    
    const screenshot2 = await page.screenshot();
    await testInfo.attach('screenshot2', { body: screenshot2, contentType: 'image/png' });

    console.log('Navigate to Cart page');
    await cartPage.goto();
    await cartPage.verifyCartHeader();

    const screenshot3 = await page.screenshot();
    await testInfo.attach('screenshot3', { body: screenshot3, contentType: 'image/png' });

    /* verify there is an item in the cart */
    console.log('Verify there is an item in the cart');
    await cartPage.verifyCartQty("1");
    const screenshot4 = await page.screenshot();
    await testInfo.attach('screenshot4', { body: screenshot4, contentType: 'image/png' });


});