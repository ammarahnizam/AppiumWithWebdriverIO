describe("Verify Registration GUI and Functionality are looking and working Fine", () => {
    const uniqueId = Date.now().toString();
    beforeEach(async() => {
        await $("~Ask App Not to Track").click();
        await $("~CREATE ACCOUNT").click();
    });

    it("The Registration Screen title should be Create an Account", async() => {
        await expect(
            await $("//XCUIElementTypeStaticText[@name='CREATE AN ACCOUNT']")
        ).toBeDisplayed();
        await expect(
            await $("//XCUIElementTypeStaticText[@name='CREATE AN ACCOUNT']")
        ).toHaveText("Create an Account");
    });

    it("The User should be able to signup successfully", async() => {
        const firstName = 'value == "First Name"';
        await $(`-ios predicate string:${firstName}`).addValue("Test");
        const lastName = 'value == "Last Name"';
        await $(`-ios predicate string:${lastName}`).addValue("One");
        const userName = 'value == "Username"';
        await $(`-ios predicate string:${userName}`).addValue(`test${uniqueId}`);
        const emailID = 'value == "Email"';
        await $(`-ios predicate string:${emailID}`).addValue(
            `ammarah.nizaam${uniqueId}@gmail.com`
        );
        const Pswd = 'value == "Password"';
        await $(`-ios predicate string:${Pswd}`).addValue("123456");
        await $("//XCUIElementTypeButton[@name='CREATE AN ACCOUNT']").click();
    });

    it("The error validation messages must be shown upon entering incomplete and incorrect input", async() => {
        const firstName = 'value == "First Name"';
        await $(`-ios predicate string:${firstName}`).addValue("Test");
        const lastName = 'value == "Last Name"';
        await $(`-ios predicate string:${lastName}`).addValue("One");
        const userName = 'value == "Username"';
        await $(`-ios predicate string:${userName}`).addValue("test");
        const emailID = 'value == "Email"';
        await $(`-ios predicate string:${emailID}`).addValue("testOnne@mailinator");
        const Pswd = 'value == "Password"';
        await $(`-ios predicate string:${Pswd}`).addValue("123");
        await $("//XCUIElementTypeButton[@name='CREATE AN ACCOUNT']").click();
        await expect(
            await $("~IT MUST BE YOUR EMAIL OR YOUR USERNAME.")
        ).toBeDisplayed();
        await expect(
            await $("~YOUR PASSWORD MUST BE 6 CHARACTERS LONG.")
        ).toBeDisplayed();
    });
});