class HomePage
{

    ultimateQALogo(){
        const an = cy.get('div.et_pb_menu__logo')
        return an.click()
    }

    clickFormPageLink(){
        const an = cy.get('a[href="https://ultimateqa.com/filling-out-forms/"]')
        return an.click()
    }    

    getWebsite(myURL){
        return cy.visitSite(myURL)
    }
    
}

export default HomePage