describe('Request', () => {
  it('displays collection question from API', () => {
    cy.request('quiz.json')
      .should(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('questions');
        expect(response.body.questions).to.have.property('length');
      });
  });
});
