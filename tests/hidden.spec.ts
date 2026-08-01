import { test, expect } from '@playwright/test';
/*
test('check', async ({ page }) => {
  // 1. ضفنا await هنا عشان يستنى الصفحة تفتح تماماً
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // 2. ضفنا await هنا عشان يستنى لما يعمل علامة الـ صح (Check)
  await page.locator('input[type="checkbox"]').check();

  // 3. قفلنا القوس المربع المنسي [ ] جوة السليكتور عشان الإيرور يختفي
  await expect(page.locator('input[type="checkbox"]')).toBeChecked();
});

test('auto', async ({ page }) => {
  // 1. ضفنا await هنا عشان يستنى الصفحة تفتح تماماً
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // 2. ضفنا await هنا عشان يستنى لما يعمل علامة الـ صح (Check)

  // 3. قفلنا القوس المربع المنسي [ ] جوة السليكتور عشان الإيرور يختفي
  await expect(page.locator('button[onclick="swapInput()"]')).toHaveAttribute('autocomplete','off');
});
*/
test('login', async ({ page }) => {
  // 1. ضفنا await هنا عشان يستنى الصفحة تفتح تماماً
  await page.goto('http://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').pressSequentially('SuperSecretPassword!',{delay:200});
  await page.locator('#password').press('Enter');

  
  // 2. ضفنا await هنا عشان يستنى لما يعمل علامة الـ صح (Check)

  // 3. قفلنا القوس المربع المنسي [ ] جوة السليكتور عشان الإيرور يختفي
});
test('drop', async ({ page }) => {
  // 1. ضفنا await هنا عشان يستنى الصفحة تفتح تماماً
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.selectOption('[id="dropdown"]',{
    value: "1"
  })
  await page.pause();
   await page.selectOption('[id="dropdown"]',{
    label: "Option 2"
  })
    await page.pause();
   
   await page.selectOption('[id="dropdown"]',{
    index: 1
  })
  
    await page.pause();

  
  // 2. ضفنا await هنا عشان يستنى لما يعمل علامة الـ صح (Check)

  // 3. قفلنا القوس المربع المنسي [ ] جوة السليكتور عشان الإيرور يختفي
});

test('alert', async ({ page }) => {
  // 1. ضفنا await هنا عشان يستنى الصفحة تفتح تماماً
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on("dialog",async(alert)=>{

    const aleertMessage=alert.message();
    expect(aleertMessage).toEqual("I am a JS Alert");
    await alert.accept();
    await expect(page.locator('#result')).toHaveText("You successfully clicked an alert");

  })
        await page.locator('button[onclick="jsAlert()"]').click();


  // 2. ضفنا await هنا عشان يستنى لما يعمل علامة الـ صح (Check)

  // 3. قفلنا القوس المربع المنسي [ ] جوة السليكتور عشان الإيرور يختفي
});




test('tabs',async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/windows");
  const [browserTabs]=await Promise.all([
    page.waitForEvent('popup'),  
    await page.locator('a[href="/windows/new"]').click()

  ])
  await browserTabs.waitForLoadState();
  const pages=browserTabs.context().pages();
  const defultTab=pages[0];
  expect(defultTab.locator('h3')).toContainText("Opening a new window");
  const lastTab=pages[pages.length-1];
  expect(lastTab.locator('h3')).toContainText("New Window");
  //defultTab.close();
  //lastTab.close();
})

test('loaded',async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/download");
  const dowanloadfiles=await Promise.all([
    page.waitForEvent('download'),  
    await page.locator('a[href="download/random_data.txt"]').click()

  ])
  const dowanloadfile=dowanloadfiles[0];
  const downloadPath=dowanloadfile.path();
  const downloadfileName=dowanloadfile.suggestedFilename();
  await dowanloadfile.saveAs(downloadfileName);
  console.log('the dowanload file name is' +downloadfileName);
  page.close();
  //defultTab.close();
  //lastTab.close();
})