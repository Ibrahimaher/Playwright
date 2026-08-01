import BasePage from "../BaseTest";

export class LoginPage extends BasePage{
   private readonly usernameField=this.page.locator("#user-name");
   private readonly passwordField=this.page.locator("#password");
   private readonly loginBtn=this.page.locator("#login-button");
   async enterUserName(username:string){
    await this.enterTextToElement(this.usernameField,username)
   }
   async enterPassword(password:string){
    await this.enterTextToElement(this.passwordField,password)
   }
   async click_login(){
    await this.clickOnElemnt(this.loginBtn);
   }


}