import { expect, test } from "@playwright/test";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import Products from "./Pages/ProductsPage/Products";
import * as testdata from "./TestData/testData.json";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

let loginPage: LoginPage;
let productsPage: Products;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new Products(page);
    
    // استخدام ! للسبك وتأكيد أن القيمة ليست undefined
    const baseUrl = process.env.base_url || 'https://www.saucedemo.com/';
    await page.goto(baseUrl);
});

test('e2e', async () => {
    // التأكيد لـ TypeScript باستخدام ! أو قيم افتراضية
    const username = process.env.login_username || 'standard_user';
    const password = process.env.login_password || 'secret_sauce';

    await loginPage.enterUserName(username);
    await loginPage.enterPassword(password);
    await loginPage.takeScreenShot('./tests/screenshot/loginPage.png');
    await loginPage.click_login();

    await productsPage.addProductToCart();
    await productsPage.takeScreenShot('./tests/screenshot/products.png');

    await productsPage.goToCart();
    await productsPage.takeScreenShot('./tests/screenshot/cart.png');
});