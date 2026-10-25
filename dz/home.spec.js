import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  // arrange - предусловие - given
  await page.goto('https://worldchess.com/');

  // act - шаги - when
  // (страница уже открыта)

  // assert - сравниваем фактический и ожидаемый результат - then
  await expect(page).toHaveTitle(/World Chess/i);
  await expect(page.getByRole('button', { name: 'PLAY' })).toBeVisible();
});
