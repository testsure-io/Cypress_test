describe('Cura Make Appointment', function () {

  it('Visit the URL', function () {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.wait(5000);
  });
  
  
  it('Click on Make Appointment', function () {
    cy.get('btn.btn-dark.btn-lg').click();
    cy.wait(5000);
});
});
