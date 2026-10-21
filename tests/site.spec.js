import { test, expect } from '@playwright/test';

test('home page has a title and navigation', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/Portfolio/);
  await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();
});

test('project cards are rendered', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('#projects .project-card')).toHaveCount(3);
});

test('contact link in the nav jumps to the contact section', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/#contact$/);
});

test('no broken images', async ({ page }) => {
  await page.goto('./');
  const broken = await page.$$eval(
    'img',
    (imgs) => imgs.filter((i) => !i.complete || i.naturalWidth === 0).length,
  );
  expect(broken).toBe(0);
});
