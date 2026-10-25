import { test, expect } from '@playwright/test';

test('continue opens registration popup', async ({ page }) => {
  // arrange - предусловие - given
  await page.goto('https://worldchess.com/');

  // act - шаги - when
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  // assert - сравниваем фактический и ожидаемый результат - then
  await expect(page).toHaveURL(/popup=registration/);
});
