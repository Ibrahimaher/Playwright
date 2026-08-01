import BasePage from "../BaseTest";

export default class Products extends BasePage {
private readonly backPoroduct=this.page.locator("#add-to-cart-sauce-labs-backpack");
private readonly cart=this.page.locator(".shopping_cart_link");
async  addProductToCart(){
    await this.clickOnElemnt(this.backPoroduct);
}
async  goToCart(){
    await this.clickOnElemnt(this.cart);
}
}