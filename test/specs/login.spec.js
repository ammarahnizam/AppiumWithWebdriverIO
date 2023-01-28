describe('Verify GUI and Functionality of Login are working fine', () => {
    beforeEach(async() => {
        await $("~Ask App Not to Track").click();
        await $("~Login").click();
    });

    it('The Login Screen title should be Sign In', async() => {
        await expect(await $("//XCUIElementTypeStaticText[@name='Sign In']")).toBeDisplayed();
        await expect(await $('//XCUIElementTypeStaticText[@name="Sign In"]')).toHaveText("Sign In");
    });

    it('The User should be able to login with correct username and password', async() => {
        const userName = 'value == "Username or Email"';
        await $(`-ios predicate string:${userName}`).addValue("anizam1000");
        const password = 'value == "Password"';
        await $(`-ios predicate string:${password}`).addValue("123456");
        await $("~SIGN IN").click();
        await expect(await $("~RECORD")).toBeExisting();
        await expect(await $("~FEED")).toBeExisting();
        await expect(await $("~RPROFILE")).toBeExisting();
        await $("~PROFILE").click();
        await $("~Logout").click();
    });

    it('The User should be able to login with correct email id and password', async() => {
        const emailID = 'value == "Username or Email"';
        await $(`-ios predicate string:${emailID}`).addValue("anizam1000@gmail.com");
        const password = 'value == "Password"';
        await $(`-ios predicate string:${password}`).addValue("123456");
        await $("~SIGN IN").click();
        await expect(await $("~RECORD")).toBeExisting();
        await expect(await $("~FEED")).toBeExisting();
        await expect(await $("~RPROFILE")).toBeExisting();
        await $("~PROFILE").click();
        await $("~Logout").click();


    });

    it('The Create an Account Link should redirects towards CREATE AN ACCOUNT screen', async() => {
        await expect(await $("~Create an account")).click();
        await expect(await $("//XCUIElementTypeStaticText[@name='Create an account']")).toBeDisplayed();
    });


});