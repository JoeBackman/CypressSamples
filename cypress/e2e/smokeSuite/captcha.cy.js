describe('Fill out form and perform calculation', () => {
    it('Should fill out the form and perform the calculation', () => {
      cy.visit('https://ultimateqa.com/filling-out-forms/')
      
      // Fill out form fields
      cy.get('#et_pb_contact_name_1').type('John Doe')
      cy.get('#et_pb_contact_message_1').type('This is a test message')
      
      // Perform calculation and fill out result
      cy.get('span.et_pb_contact_captcha_question').invoke('text').then((questionText) => {
        const parts = questionText.split(' ')
        const num1 = parseInt(parts[0])
        const num2 = parseInt(parts[2])
        const result = num1 + num2
        cy.get('input.et_pb_contact_captcha').type(result)
      })
      
      // Submit the form - Ideally the submit button would have it's own unique class but given this page uses the same class we have to find it based on the unique column
      cy.get('div.et_pb_column.et_pb_column_1_2.et_pb_column_2').children().contains('Submit').click()
      
      // Assert that the success message is displayed
      cy.contains('Thanks for contacting us').should('be.visible')
    })
  })
  