const {test,expect} = require('playwright/test')

test('My First test', async function({page}) {
    expect(1+2).toBe(3);
})

test('My Second test', async function({page}) {
    expect(100).toBe(100);
})

test('My Third test', async function({page}) {
    expect("Ahuti Kumari").toContain("Kumari");
})