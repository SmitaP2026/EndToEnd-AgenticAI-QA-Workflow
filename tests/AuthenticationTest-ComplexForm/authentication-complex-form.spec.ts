import { test, expect } from '@playwright/test';

const BASE_URL = 'https://authenticationtest.com/complexAuth/';
const VALID_EMAIL = 'complex@authenticationtest.com';
const VALID_PASSWORD = 'pa$$w0rd';
const DROPDOWN_OPTION_VALUE = 'yes';

test.describe('AuthenticationTest Complex Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should display the complex login form fields', async ({ page }) => {
    await expect(page.getByLabel('E-Mail Address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.locator('select#selectLogin')).toBeVisible();
    await expect(page.getByLabel('I love form manipulation!')).toBeVisible();
    await expect(page.locator('input[type=submit]')).toBeVisible();
  });

  test('should log in successfully with valid credentials', async ({ page }) => {
    // Fill in the login form with valid credentials
    await page.getByLabel('E-Mail Address').fill(VALID_EMAIL);
    await page.getByLabel('Password').fill(VALID_PASSWORD);
    await page.locator('select#selectLogin').selectOption(DROPDOWN_OPTION_VALUE);
    await page.locator('input#loveForm').check();
    
    // Submit the login form
    await page.locator('input[type=submit]').click();

    // Verify successful login
    await expect(page).toHaveURL(/loginSuccess/);
    await expect(page.locator('text=Success! You are now logged in!')).toBeVisible();
    await expect(page.locator('a:has-text("Sign Out")')).toBeVisible();
  });

  test('should show a failure page for invalid credentials', async ({ page }) => {
    // Fill in the login form with invalid credentials
    await page.getByLabel('E-Mail Address').fill('invalid@authenticationtest.com');
    await page.getByLabel('Password').fill('wrongpass');
    await page.locator('select#selectLogin').selectOption(DROPDOWN_OPTION_VALUE);
    await page.locator('input#loveForm').check();
    
    // Submit the login form
    await page.locator('input[type=submit]').click();

    // Verify login failure
    await expect(page).toHaveURL(/loginFail/);
    await expect(page.locator('text=Sorry -- You have not successfully logged in.')).toBeVisible();
  });

  test('should prevent invalid email format submission via client-side validation', async ({ page }) => {
    // Fill in the login form with invalid email format
    await page.getByLabel('E-Mail Address').fill('invalid-email-format');
    await page.getByLabel('Password').fill(VALID_PASSWORD);
    await page.locator('select#selectLogin').selectOption(DROPDOWN_OPTION_VALUE);
    await page.locator('input#loveForm').check();
    
    // Attempt to submit the login form
    await page.locator('input[type=submit]').click();

    // Verify that the page remains on the login form (client-side validation blocks submission)
    await expect(page).toHaveURL(BASE_URL);
    
    // Verify that the email field has a validity state indicating type mismatch
    const emailInput = page.locator('input#email');
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(false);
  });

  test('should show login failure when required fields are missing', async ({ page }) => {
    // Attempt to submit the form without filling any fields
    await page.locator('input[type=submit]').click();

    // Verify login failure due to missing fields
    await expect(page).toHaveURL(/loginFail/);
    await expect(page.locator('text=Sorry -- You have not successfully logged in.')).toBeVisible();
  });

  test('should handle navigation and sign out correctly', async ({ page }) => {
    // Log in successfully first
    await page.getByLabel('E-Mail Address').fill(VALID_EMAIL);
    await page.getByLabel('Password').fill(VALID_PASSWORD);
    await page.locator('select#selectLogin').selectOption(DROPDOWN_OPTION_VALUE);
    await page.locator('input#loveForm').check();
    await page.locator('input[type=submit]').click();

    // Verify login success
    await expect(page).toHaveURL(/loginSuccess/);

    // Click Sign Out
    await page.locator('a:has-text("Sign Out")').click();

    // Verify redirect to home page
    await expect(page).toHaveURL('https://authenticationtest.com/');
  });

  test('should validate email field before accepting form submission', async ({ page }) => {
    // Test various invalid email formats
    const invalidEmails = [
      'notanemail',
      'missing@domain',
      '@nodomain.com',
      'spaces in@email.com'
    ];

    for (const invalidEmail of invalidEmails) {
      // Navigate back to form
      await page.goto(BASE_URL);

      // Fill form with invalid email
      await page.getByLabel('E-Mail Address').fill(invalidEmail);
      await page.getByLabel('Password').fill(VALID_PASSWORD);
      await page.locator('select#selectLogin').selectOption(DROPDOWN_OPTION_VALUE);
      await page.locator('input#loveForm').check();

      // Try to submit
      await page.locator('input[type=submit]').click();

      // Verify we remain on the login page or get a failure
      const currentUrl = page.url();
      const isLoginPage = currentUrl.includes('complexAuth') || currentUrl.includes('loginFail');
      expect(isLoginPage).toBe(true);
    }
  });
});
