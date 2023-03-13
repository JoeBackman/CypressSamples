import HomePage from "../../support/pageObjects/UltiQaAuto"
import Form from "../../support/pageObjects/UltiQaAutoForm"

//This test will navigate to the root page then identify the link for the forms page. Once there it will populate all the fields and perform the calculation to submit the values.
describe("Ultimate QA Demo Scripts", function () {
    const homepage = new HomePage()
    beforeEach(() => {
        homepage.getWebsite(Cypress.env('url'))
        //cy.visitSite(Cypress.env('url'))
        // getWebsite
        })
    it("Login Validation", function () {
        const form = new Form()
        homepage.clickFormPageLink()
        form.getFirstNameLeft('Joe')
        form.getMesageBoxLeft('Insert larger messages and stuff here')
        //WIP  form.getRightSubmitButtonCaptcha()
    })
})