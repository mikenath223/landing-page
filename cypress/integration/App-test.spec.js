
beforeEach(() => {
  cy.visit('/')
})


describe('e to e test to load the quiz', () => {
  it('it simulates button click and loads the quiz', () => {
    cy.contains(/take the quiz/i)
      .click()
    cy.contains("Quiz")
    cy.contains("Step")
  })
});

describe('e to e test for landing page structure', () => {
  it('asserts specific elements exist on landing page load', () => {
    cy.contains(/be good to yourself/i)
    cy.contains(/We’re working around the clock/i)
    cy.contains('HAIR LOSS');
    cy.contains('ERECTILE DYSFUNCTION');
    cy.contains('PRODUCT')
    cy.contains('COMPANY')
    cy.contains('INFO')
    cy.contains('FOLLOW US')
    cy.contains(/2019 Manual/i)
  })
});
