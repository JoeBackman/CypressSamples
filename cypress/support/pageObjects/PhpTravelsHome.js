class HomePage
{

    firstName()
    {
        const an = cy.get('.jfHeader-menuListLink.jfHeader-dynamicLink.js-tracking.js-myforms')
        return an.click()
    }

    getWebsite(myURL){
        return cy.visitSite(myURL)
    }
    
}

export default HomePage