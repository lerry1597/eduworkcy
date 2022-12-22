describe('My first test', () => {
    it('TC#1 Lengkapi code berikut', () => {
      cy.visit('https://example.cypress.io/')

      cy.pause();

      cy.contains('type').click();

      //Should be on a new URL wich includes
      cy.url().should('include', '/commands/action')

      cy.get('.action-email').type('eduwork@edumail.com').should('have.value', 'eduwork@edumail.com')
    })
  })