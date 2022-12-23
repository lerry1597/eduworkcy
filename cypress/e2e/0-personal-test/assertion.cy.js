/// <reference types="cypress"/> 

describe('Browser actions', () => {
    beforeEach(() => {
        cy.visit('https://www.traveloka.com/')
    })
    it('Should check correct url', () => {
        cy.url().should('include', 'traveloka.com')
    });

    it('Shoul check button regist is visible', () => {
        cy.get('.r-1wtj0ep > :nth-child(2) > .css-18t94o4').should('be.visible')
    });
});