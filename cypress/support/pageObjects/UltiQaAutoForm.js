class Form
{

    getFirstName(value){
        const bn = cy.get('input[id="user[email]"]')
        return bn.type(value)
    }

    getBusinessTin(value){
        const bn = cy.get('input[id="business.tin"]')
        return bTin.type(value)
    }

}

export default Form