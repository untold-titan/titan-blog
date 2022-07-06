import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=`
  await page.locator('text=`').click();
  await expect(page).toHaveURL('http://localhost:3000/the-lab/login');

  // Click input >> nth=0
  await page.locator('input').first().click();

  // Fill input >> nth=0
  await page.locator('input').first().fill('mitchell@miller-time.ca');

  // Press Tab
  await page.locator('input').first().press('Tab');

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('000151371');

  // Click text=Log me IN!
  await page.locator('text=Log me IN!').click();

});