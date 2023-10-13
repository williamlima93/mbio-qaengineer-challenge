module.exports = class HomepagePO {

    constructor(page) {
        this.page = page
        this.ourModelsMenu = page.getByRole('menuitem', {name: 'Our models'})
        this.hatchbacksMenu = page.getByRole('menuitem', {name: 'Hatchbacks'})
        this.aClassHatchbackOption = page.getByRole('menuitem', {name: 'A-Class Hatchback'})
    }

    async selectOurModelsMenu() {
        await this.ourModelsMenu.click()
    }     
    
    async selectHatchbacksMenu() {
        await this.hatchbacksMenu.click()
    }

    async selectAClassHatchbackOption() {
        await this.aClassHatchbackOption.click()
    }

}
