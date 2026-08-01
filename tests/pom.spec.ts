import { expect, test } from "@playwright/test";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import Products from "./Pages/ProductsPage/Products";
import * as testdata from "./TestData/testData.json";

let loginPage: LoginPage;
let productsPage: Products;

// نستخدم fixture الـ page الجاهزة من Playwright مباشرةً
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new Products(page); // تعديل اسم المتغير ليطابق
    
    await page.goto("https://www.saucedemo.com/");
});

test('e2e', async () => {
    // تعديل P الكبيرة في loginPage
    await loginPage.enterUserName(testdata.username);
    await loginPage.enterPassword(testdata.password);
    await loginPage.takeScreenShot('./tests/screenshot/loginPage.png');
    await loginPage.click_login();

    // تعديل اسم المتغير إلى productsPage
    await productsPage.addProductToCart();
    await productsPage.takeScreenShot('./tests/screenshot/products.png');

    await productsPage.goToCart();
    await productsPage.takeScreenShot('./tests/screenshot/cart.png');
});

test('e2e1', async () => {
    // تعديل P الكبيرة في loginPage
    await loginPage.enterUserName(testdata.username);
    await loginPage.enterPassword(testdata.password);
    await loginPage.takeScreenShot('./tests/screenshot/loginPage.png');
    await loginPage.click_login();

    // تعديل اسم المتغير إلى productsPage
    await productsPage.addProductToCart();
    await productsPage.takeScreenShot('./tests/screenshot/products.png');

    await productsPage.goToCart();
    await productsPage.takeScreenShot('./tests/screenshot/cart.png');
});
test('e2e2', async () => {
    // تعديل P الكبيرة في loginPage
    await loginPage.enterUserName(testdata.username);
    await loginPage.enterPassword(testdata.password);
    await loginPage.takeScreenShot('./tests/screenshot/loginPage.png');
    await loginPage.click_login();

    // تعديل اسم المتغير إلى productsPage
    await productsPage.addProductToCart();
    await productsPage.takeScreenShot('./tests/screenshot/products.png');

    await productsPage.goToCart();
    await productsPage.takeScreenShot('./tests/screenshot/cart.png');
});