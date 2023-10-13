
module.exports = class CookiesPO {

    constructor(page) {
        this.page = page
        this.cookiesPopup = page.locator("div[class='cmm-cookie-banner__content']")
        this.acceptCookiesButton = page.locator("div[class='cmm-cookie-banner__content']").getByRole('button', { name: 'Agree to all' })
    }

    async clickAcceptCookiesButton() {
        try {
            const isAcceptCookiesButton = await this.page.waitForSelector("div.cmm-cookie-banner__content", { timeout: 3000, state: 'visible' })
            if (isAcceptCookiesButton)
                await this.acceptCookiesButton.dispatchEvent("click")
        }
        catch (error) {
            console.log("The cookies popup did not appear. The test will keep running.")
        }
    }

}