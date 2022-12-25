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
        loginPage.enterUsername('username')
        loginPage.enterPassword('password')

        cy.log('Should activete a checkbox')
        loginPage.activeCheckbox()
    });

});