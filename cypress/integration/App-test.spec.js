describe('e to e test for taking the quiz', () => {
  it('loads the quiz', () => {
    cy.visit('/')
    cy.contains(/take the quiz/i)
      .click()
    cy.contains("Quiz")
    cy.contains("Step")
  })

  it('takes the quiz and gets the recieve treatment result', () => {
    cy.visit('/')
    cy.contains(/take the quiz/i)
    .click()
    // // basic hooks test
    // cy.contains("Initial State")
    // cy.contains("State Change Button")
    //   .click()
    // cy.contains("Initial State Changed")
    // cy.contains("Moe")
    // cy.contains("Change Name")
    //   .click()
    // cy.contains("Steve")
    // //useReducer test
    // cy.contains('stateprop1 is false')
    // cy.contains('Dispatch Success')
    //   .click()
    // cy.contains('stateprop1 is true')
    // //useContext test
    // cy.contains("Some Text")
    // cy.contains('Change Text')
    //   .click()
    // cy.contains("Some Other Text")
    // //form test
    // cy.get('#text1')
    //   .type('New Text {enter}')
    // cy.contains("Change: New Text")
    // cy.contains("Submit Value: New Text")
    // //axios test
    // cy.request('https://jsonplaceholder.typicode.com/posts/1')
    //   .should(res => {
    //       expect(res.body).not.to.be.null
    //       cy.contains(res.body.title)
    //     })
  });

  it('asserts the dom text on page load', () => {
    cy.visit('/')
    cy.contains(/be good to yourself/i)
    cy.get('').scrollTo('0%', '25%')
  })
});