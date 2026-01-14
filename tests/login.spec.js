const { expect } = require("@playwright/test")
const test = require("node:test")

//Create Valid Login test
test('Valid Login Test', async function ({page}) {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


})

const { expect } = require("@playwright/test")
const test = require("@playwright/test")

test('Valid Login Test', async function ({page}) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    // Example: Check if an element is visible (truthy)
    const loginButton = await page.locator('button[type="submit"]')
    await expect(loginButton).toBeVisible()
    
    // Or check if a condition is true
    const isVisible = await page.locator('.login-form').isVisible()
    await expect(isVisible).toBeTruthy()
})