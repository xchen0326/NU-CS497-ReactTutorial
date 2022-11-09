/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with Fall CS courses', () => {
        cy.visit ('/');
        cy.get('[data-cy=Fall]').should('contain', 'Fall CS');
      });
    
    it('shows Winter courses when Winter is selected', () => {
    cy.visit ('/');
    cy.get('[data-term=Winter]').click({force: true});
    cy.get('[data-cy=Winter]').should('contain' ,'Winter');
    });
  
  });