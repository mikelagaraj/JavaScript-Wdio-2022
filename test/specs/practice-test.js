const { expect } = require ("chai")

describe('Locator strategies part - 3', () => {
    it('Verify user can log in', async () => {

        await browser.url ('https://www.facebook.com/');

        await browser.pause(2000);

        const loginEmail = await $('//input[@aria-label="Email address or phone number"]');
        await loginEmail.setValue('abcd@test.com');

    })
    
});