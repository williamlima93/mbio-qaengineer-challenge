const { test } = require("@playwright/test")
const HomepagePO = require("./page-objects/landing-page-po")
const PassengerCarsPO = require("./page-objects/passenger-cars-po")
const CookiesPO = require("./page-objects/cookies-po")
const MAIN_URL = "https://www.mercedes-benz.co.uk/"

test.beforeEach(async({page}) => {
    await page.goto(MAIN_URL)
})

test('Validate A Class models price are between £15,000 and £60,000', async ({ page }) => {
    const homepagePO = new HomepagePO(page)
    const passengerCarsPO = new PassengerCarsPO(page)
    const cookiesPO = new CookiesPO(page)

    await cookiesPO.clickAcceptCookiesButton()
    await homepagePO.selectOurModelsMenu()
    await homepagePO.selectHatchbacksMenu()
    await homepagePO.selectAClassHatchbackOption()

    await cookiesPO.clickAcceptCookiesButton()
    await passengerCarsPO.clickBuildYourCarButton()
     
    await cookiesPO.clickAcceptCookiesButton()
    await passengerCarsPO.selectFuelType()
    await passengerCarsPO.selectDieselOption()

    await passengerCarsPO.takeResultsScreenshot()

    await passengerCarsPO.saveCarPricesTextFile()
})