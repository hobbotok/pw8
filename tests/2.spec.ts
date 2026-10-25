import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const URL = 'https://realworld.qa.guru/';
/*let secret;
let email = faker.internet.email();*/


function getEmail() {
    let email = faker.internet.email();

    return email;

};

const getPassword = (lengthOfPassword) => {
    let password = faker.internet.password({length: lengthOfPassword});

    return password;
};

test('test', async ({ page }) => {
  await page.goto(URL);
  
  const email = getEmail();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(email);
  await page.getByRole('textbox', { name: 'Your Name' }).press('Tab');

  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');

  await page.getByRole('textbox', { name: 'Password' }).fill(getPassword(10));
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('navigation')).toContainText(email);
});

test('Некий тест', async ({ page }) => {
    await page.goto(URL);
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill('Alyona');
    await page.getByRole('textbox', { name: 'Your Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Email' }).fill(getEmail());
  
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill(getPassword(4));
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('navigation')).toContainText('Alyona');
  });