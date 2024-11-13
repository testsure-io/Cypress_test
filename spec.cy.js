describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.wait(2000);
    
  });
  it('Click on Querying',function(){
    cy.visit('https://example.cypress.io/commands/querying')
    //cy.get('nav.navbar-nav.pull-right').click();
    cy.wait(2000);
  });
  
});