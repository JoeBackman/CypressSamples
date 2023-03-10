import HomePage from "../../support/pageObjects/PhpTravelsHome"
import Pricing from "../../support/pageObjects/PhpTravelsPricing"

describe("Business Ultimate", function () {
    const homepage = new HomePage()
    beforeEach(() => {
        homepage.getWebsite(Cypress.env('url'))
        //cy.visitSite(Cypress.env('url'))
        // getWebsite
        })
    it("Apply a business ultimate card", function () {
        const pricingpage = new Pricing()
        //homepage.clickApplyNowfoBU()
        pricingpage.getFirstName('Joe')
    })
})