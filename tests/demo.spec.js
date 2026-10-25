import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // arrange - предусловие - given
  await page.goto('https://realworld.qa.guru/');
 // act - шаги - when
  await page.getByRole('link', { name: 'Sign up' }).click();
  //await expect(page1.getByRole('textbox', { name: 'Your Name' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('drdre@bebebe.com');

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('drdre@bebebe.com'); 

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('drdre@bebebe.com');

  await page.getByRole('button', { name: 'Sign up' }).click();

  // assert - сравниваем фактический и ожидаемый результат - then
  await expect(page.getByRole('navigation')).toContainText('drdre@bebebe.com');

/*  await expect(page1.getByText('Articles not available.')).toBeVisible();
  await page.locator('div').nth(5).click();
  await page.getByText('drdre@bebebe.com').click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('heading', { name: 'Sign up' }).click();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
  */
});