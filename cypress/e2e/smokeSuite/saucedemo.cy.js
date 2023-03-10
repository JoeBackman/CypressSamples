describe('Sauce Demo Login', () => {
    it('Login, add multiple items to cart then checkout', () => {
        cy.visit('https://www.saucedemo.com/')

        //Start login process
        cy.get('input#user-name').type('standard_user')
        cy.get('input#password').type('secret_sauce')
        cy.get('input[type="submit"]').click()

        //Navigate to backpack item page then add to cart
        cy.get('a[id="item_4_title_link"]').should('contain', 'Sauce Labs Backpack').click()
        cy.contains('Add to cart').click()

        //Assert item has been added to cart with the correct price
        cy.get('a[class="shopping_cart_link"]').should('contain', '1').click()
        cy.contains('Sauce Labs Backpack').parent().contains('29.99')

        //Open Hamburger menu and navigate back to main product page
        cy.contains('Open Menu').click()
        cy.contains('All Items').click()

        //Add Test.allTheThings tshirt
        cy.contains('Test.allTheThings()').parent().parent().contains('Add to cart').click()
        
        //Assert item has been added to cart and open cart
        cy.get('a[class="shopping_cart_link"]').should('contain', '2').click()
        cy.contains('Sauce Labs Backpack').parent().contains('29.99')
        cy.contains('Test.allTheThings()').parent().contains('15.99')

        //Proceed to checkout
        cy.contains('Checkout').click()

        //Populate checkout information
        cy.get('input[id="first-name"]').type('Joseph')
        cy.get('input[id="last-name"]').type('Backman')
        cy.get('input[id="postal-code"]').type('48307')
        
        //Review Order
        cy.contains('Continue').click()

        //Verify Cart total is calculated properly
        cy.contains('Item total').should('contain', '45.98')
        cy.contains('Tax').should('contain', '3.68')
        cy.get('div.summary_info_label.summary_total_label').should('contain', '49.66')

        //Finalize and confirm order
        cy.contains('Finish').click()
        cy.get('h2.complete-header').should('contain', 'Thank you for your order!')
        cy.get('button[name="back-to-products"]').click()
    })
})