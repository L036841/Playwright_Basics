
const{test,expect}=require('@playwright/test');

test('Verify Application Title',async function({page}){
    //Open Google page
    //page.goto
    //page.url
    //After navigating to Google with page.goto(), this line retrieves and stores the actual URL of the page that loaded, 
    // then logs it in the next line. 
    // This is useful for verifying that the page navigated to the expected URL.
    await page.goto('https://www.google.com/');
    const url=await page.url();
    console.log("Title is: "+url);

    const title=await page.title();
    console.log("Title is: "+title);    
    
    //Assertion
    await expect(page).toHaveTitle("Google");
})
