describe("Verify Forgot Password Functionality is Working Fine", () => {
    beforeEach(async() => {
        await $("~Ask App Not to Track").click();
        await $("~Login").click();
        await $("~Forgot Password").click();
    });

    it("The Forgot Password Screen title should be Reset Password", async() => {
        await expect(
            await $("//XCUIElementTypeStaticText[@name='Reset Password']")
        ).toBeDisplayed();
        await expect(
            await $("//XCUIElementTypeStaticText[@name='Reset Password']")
        ).toHaveText("Reset Password");
    });

    it("The Sign In Link uon Reset Password Screen upon clicking should redirects towards Sign In page", async() => {
        await expect(await $("~Sign In")).click();
        await expect(
            await $("//XCUIElementTypeStaticText[@name='Sign In']")
        ).toBeDisplayed();
    });

    it("The helping text should be visible on Reset Password Screen", async() => {
        await expect(
            await $(
                "~Enter bellow the email that you used to create your account@gmil.com"
            )
        ).toBeDisplayed();
        await expect(
            await $("~Enter bellow the email that you used to create your account")
        ).toHaveText("Enter bellow the email that you used to create your account");
    });

    it("The validation message must be shown upon entering an non-existing email", async() => {
        const email = 'value == "Email"';
        await $(`-ios predicate string:${email}`).addValue("anizam1000@yahoo.com");
        await expect(await $("~RESET PASSWORD")).click();
        await expect(
            await $(
                "~The operation couldn’t be completed."
            )
        ).toBeDisplayed();
    });

    it("The validation message must be shown upon entering an non-existing email", async() => {
        const email = 'value == "Email"';
        await $(`-ios predicate string:${email}`).addValue("anizam1000@gmail.com");
        await expect(await $("~RESET PASSWORD")).click();
        await expect(
            await $(
                "//XCUIElementTypeStaticText[@name='We just sent you an email that will allow you to reset your password.']"
            )
        ).toBeDisplayed();
    });
});