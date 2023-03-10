class Pricing
{

    getFirstName(value){
        const bn = cy.get('input.first_name.input.mb1').scrollIntoView()
        return bn.type(value)
    }

    getBusinessTin(value){
        const bn = cy.get('input[id="business.tin"]')
        return bTin.type(value)
    }

}

export default Pricing