import { Locator,Page } from "@playwright/test";

export default class BasePage{
protected readonly page :Page;
constructor(page: Page){
this.page=page;

}
protected async clickOnElemnt (elemnt:Locator)  {
    await elemnt.click();
} 
protected async enterTextToElement(element:Locator,text:string){
   await element.fill(text);
} 
 public async takeScreenShot(filePath:string){
  await this.page.screenshot({path:filePath})
 }
}