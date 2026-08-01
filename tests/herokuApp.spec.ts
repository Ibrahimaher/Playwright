import { test, expect } from '@playwright/test';

test('Test successful login and logout', async ({ page }) => {
  // 1. الذهاب للموقع والدخول على صفحة الـ Login
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();

  // 2. التأكد من ظهور الحقول وكتابة الـ Username
  await expect(page.getByRole('textbox', { name: 'Username1' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');

  // 3. كتابة الـ Password الصح مباشرة
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  // 4. الضغط على زرار الـ Login
  await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
  await page.getByRole('button', { name: ' Login' }).click();

  // 5. التأكد من نجاح تسجيل الدخول (في نفس الصفحة)
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();

  // 6. عمل Logout والتأكد من الخروج
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();
});