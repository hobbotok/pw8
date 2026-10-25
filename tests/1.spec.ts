import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///Users/alena/Documents/vs_code/pw8/burger-order.html');
  //await page.getByRole('textbox', { name: 'Имя клиента:' }).click();
  //await page.getByRole('textbox', { name: 'Имя клиента:' }).fill('Алена');

  //await page.getByPlaceholder('Введите ваше имя').click();
  //await page.getByPlaceholder('Введите ваше имя').fill('Алена');

  //await page.getByText('Имя клиента:').click();
  //await page.getByText('Имя клиента:').fill('Алена');

  await page.locator('.form-group').filter({ hasText: 'Имя клиента'}).click();
  await page.locator('.form-group').filter({ hasText: 'Имя клиента'}).getByRole('textbox').fill('Алена');
  await page.getByRole('textbox', { name: 'Имя клиента:' }).press('Tab');
  
  //await page.locator('label[for="burgerType"]').click();
  //await page.getByLabel('Тип бургера:').selectOption('cheeseburger');
  await page.locator('label[for="burgerType"]').selectOption('cheeseburger');
  await page.getByText('Большой').click();
  await page.getByRole('radio', { name: 'Большой' }).check();
  await page.getByRole('checkbox', { name: 'Горчица' }).check();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Заказать бургер' }).click();
  await expect(page.locator('#popupMessage')).toContainText('Спасибо за заказ, Алена!');
});