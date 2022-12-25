import { LoginPage } from "../component/Login";

const loginPage = new LoginPage;

describe('Products', () => {
   before(function () {
        cy.visit('https://www.saucedemo.com/')

        cy.fixture('example.json').then(function (user) {
            loginPage.enterUsername(user.username)
            loginPage.enterPassword(user.password)

            cy.log('Click Login button')
            loginPage.clickLogin()
        })
   })

    it('Checkout one Product', function() {
        cy.log('add backpack to your chart')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').should('contain', 1)

        cy.log('Open Your cart')
        cy.get('#shopping_cart_container').click()
        cy.get('.header_secondary_container').should('have.text', 'Your Cart')
        cy.get('.cart_item').should('contain', 1)

        cy.log('Click button Checkout')
        cy.get('[data-test="checkout"]').click()
        cy.get('.header_secondary_container').should('have.text', 'Checkout: Your Information')
        cy.get('form').should('exist')

        cy.log('Input form with valid data')
        cy.get('[data-test="firstName"]').type('Jhon')
        cy.get('[data-test="firstName"]').should('have.value', 'Jhon')
        cy.get('[data-test="lastName"]').type('Doe')
        cy.get('[data-test="lastName"]').should('have.value', 'Doe')
        cy.get('[data-test="postalCode"]').type('8897')
        cy.get('[data-test="postalCode"]').should('have.value', '8897')
        cy.get('[data-test="continue"]').click()
        cy.get('.header_secondary_container').should('have.text', 'Checkout: Overview')

        cy.log('Finish a Checkout')
        cy.get('[data-test="finish"]').click()
        cy.get('.header_secondary_container').should('have.text', 'Checkout: Complete!')
    });
});