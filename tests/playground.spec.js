const{test,expect}=require('@playwright/test');

test("Click on Search Button",async function({page}){
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    //Click on Search Button
    //await page.click("input[placeholder='Search']");
    await page.getByRole('textbox',{name:'Search'}).click();


    test("Enter forms for Returning Customers",async function({page}){
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        //Enter Email
        //await page.fill("input[name='email']


})
