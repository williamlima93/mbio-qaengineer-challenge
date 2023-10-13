const fs = require('fs')

module.exports = class PassengerCarsPO {

    constructor(page) {
        this.page = page
        this.buildYourCarButton = page.locator("div[class='owc-stage-cta-buttons']").getByRole('link', {name: 'Build your car'}).first()
        this.fuelTypeFilter = page.locator("[aria-label=\"Fuel type, selected 0 items\"]")
        this.dieselOption = page.getByRole('checkbox', {name: 'Diesel'})
        this.fuelTypeFilterResults = page.locator("div[class='cc-motorization-comparison']")
    }

    async clickBuildYourCarButton() {
        await this.buildYourCarButton.scrollIntoViewIfNeeded()
        await this.buildYourCarButton.click()
    }

    async selectFuelType() {
        await this.fuelTypeFilter.scrollIntoViewIfNeeded()
        await this.fuelTypeFilter.click()
    }

    async selectDieselOption() {
        await this.dieselOption.click({force: true})
    }

    async takeResultsScreenshot() {
        await this.fuelTypeFilterResults.screenshot({ path: './tests/screenshots/results_screenshot.png' });
    }

    async saveCarPricesTextFile() {
        await this.page.waitForSelector('.cc-motorization-comparison')
        const filterResults = await this.page.$('.cc-motorization-comparison')
        const carPrice = await filterResults.$$('.cc-motorization-header__price--with-environmental-hint')
        const carPrices = []

        for (const price of carPrice) {
            const text = await price.innerText()
            carPrices.push(text)
        }

        const minCarPrice = Math.min(...carPrices);
        const maxCarPrice = Math.max(...carPrices);

        fs.writeFileSync('car_prices.txt', `Minimum price: ${minCarPrice} Maximum price: ${maxCarPrice}`)
    }
}