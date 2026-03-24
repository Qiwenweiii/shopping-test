const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../data/loginData');

loginData.forEach(({ username, password, expected }) => {
  test(`电商登录流程(POM)-${username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    if (expected === 'success') {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator('.error-message-container')).toBeVisible();
    }
  });
});
