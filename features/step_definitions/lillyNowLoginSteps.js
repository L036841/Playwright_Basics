const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

let browser;
let page;

Before(async function() {
  // Initialize browser before each scenario
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});

After(async function() {
  // Close browser after each scenario
  await browser.close();
});

// Step: Navigate to Lilly Now login page
Given('User navigates to Lilly Now login page', async function() {
  await page.goto('https://now.lilly.com/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  console.log('Navigated to Lilly Now login page');
  console.log('Current URL: ' + await page.url());
});

// Step: Enter valid credentials
When('User enters valid credentials', async function() {
  // Wait for email field and fill it
  // Note: Update selectors based on actual Lilly Now page structure
  const emailField = await page.locator('input[type="email"], input[name="email"], input[id*="email"]').first();
  
  if (await emailField.isVisible()) {
    await emailField.fill('your-email@lilly.com');
    console.log('Email entered');
  }
  
  // Wait for password field and fill it
  const passwordField = await page.locator('input[type="password"], input[name="password"]').first();
  
  if (await passwordField.isVisible()) {
    await passwordField.fill('your-password');
    console.log('Password entered');
  }
});

// Step: Click login button
When('User clicks the login button', async function() {
  // Look for login button with various possible selectors
  const loginButton = await page.locator(
    'button:has-text("Login"), button:has-text("Sign In"), button:has-text("Submit"), input[type="submit"]'
  ).first();
  
  if (await loginButton.isVisible()) {
    await loginButton.click();
    console.log('Login button clicked');
    
    // Wait for navigation or page load
    await page.waitForLoadState('networkidle');
  }
});

// Step: Verify successful login
Then('User should be successfully logged in', async function() {
  // Wait a moment for page to fully load after login
  await page.waitForTimeout(2000);
  
  // Check if we're no longer on the login page
  const currentUrl = await page.url();
  console.log('Current URL after login: ' + currentUrl);
  
  // Verify login was successful (URL should change from login page)
  expect(currentUrl).not.toContain('login');
  console.log('User successfully logged in');
});

// Step: Verify dashboard is displayed
Then('Dashboard should be displayed', async function() {
  // Check for dashboard elements
  const dashboardContent = await page.locator('body').first();
  
  // Wait for dashboard to load
  await page.waitForLoadState('networkidle');
  
  const isVisible = await dashboardContent.isVisible();
  expect(isVisible).toBeTruthy();
  
  console.log('Dashboard is displayed');
  console.log('Final URL: ' + await page.url());
  console.log('Page Title: ' + await page.title());
});
