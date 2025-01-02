
describe('My First Suite', ()=>{
    it('Test 1 - Verify title | Positive test', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Test 2 - Verify title | Negative test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq', 'OrangeHRM1')
    })
})