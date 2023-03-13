class Form
{
    //Left justified name field
    getFirstNameLeft(value){
        const bnl = cy.get('input[id="et_pb_contact_name_0"]').click({ force: true })
        return bnl.type(value)
    }
    //Left justified message field
    getMesageBoxLeft(value){
        const bml = cy.get('textarea[id="et_pb_contact_message_0"]').click({ force: true })
        return bml.type(value)
    }

    //Right justified name field
    getFirstNameRight(value){
        const bnr = cy.get('input[id="et_pb_contact_name_1"]').click({ force: true })
        return bnr.type(value)
    }
    
    //Right justified message field
    getMesageBoxRight(value){
        const bmr = cy.get('textarea[id="et_pb_contact_message_1"]').click({ force: true })
        return bmr.type(value)
    }
    
    //Right justified submit button requires a simple math calculation, we handle that below
    getRightSubmitButtonCaptcha(value){
        const parts = questionText.split(' ')
        const num1 = parseInt(parts[0])
        const num2 = parseInt(parts[2])
        const result = num1 + num2
        const calc = cy.get('#et_pb_contact_captcha_0').type(result)
        return calc.type(value)
    }

}

export default Form