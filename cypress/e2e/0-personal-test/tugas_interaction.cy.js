import { LoginPage } from "../component/Login";

const loginPage = new LoginPage;

describe('Login form', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    // it('Shoul include url', () => {
    //     cy.url().should('include', 'zero.webappsecurity.com')
    // });

    it('Submite valid form', () => {
        cy.log('Click on signin button')
        cy.get('#signin_button').click()

        cy.log('Enter Username and Password')
        cy.get('[name="user_login"]').clear()
        cy.get('[name="user_login"]').type('username')
        
        cy.get('[name="user_password"]').clear()
        cy.get('[name="user_password"]').type('password')

        cy.log('Should activete a checkbox')
        cy.get('[name="user_remember_me"]').check();
    });

});