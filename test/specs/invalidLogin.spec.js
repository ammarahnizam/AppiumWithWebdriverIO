describe("Verify Invalid Login Functionality is Working Fine", () => {
    beforeEach(async() => {
        await $("~Ask App Not to Track").click();
        await $("~Login").click();
    });

    it("The User should not be able to login with incorrect credentials", async() => {
        const emailID = 'value == "Username or Email"';
        await $(`-ios predicate string:${emailID}`).addValue(
            "anizam1000@gmail.com"
        );
        const password = 'value == "Password"';
        await $(`-ios predicate string:${password}`).addValue("123");
        await $("~SIGN IN").click();
        await expect(
            await $("~Invalid username/email or password")
        ).toBeDisplayed();
    });

    it("The error validation messages must be shown upon entering incomplete input", async() => {
        const emailID = 'value == "Username or Email"';
        await $(`-ios predicate string:${emailID}`).addValue("ani");
        const password = 'value == "Password"';
        await $(`-ios predicate string:${password}`).addValue("123");
        await $("~SIGN IN").click();
        await expect(
            await $("~IT MUST BE YOUR EMAIL OR YOUR USERNAME.")
        ).toBeDisplayed();
        await expect(
            await $("~YOUR PASSWORD MUST BE 6 CHARACTERS LONG.")
        ).toBeDisplayed();
    });
});