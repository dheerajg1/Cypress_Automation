describe('Hooks and tags', ()=>{

    before(()=>{
        cy.log('*********** Launch app *************')
    })

    beforeEach(()=>{
        cy.log('*********** Login *************')
    })

    after(()=>{
        cy.log('********* Close app ***********')
    })

    afterEach(()=>{
        cy.log('********* Logout ***********')
    })

    it('Search', ()=>{
        cy.log('********* SEARCHING ************')
    })

    it('Advanced Search', ()=>{
        cy.log('********* ADVANCED SEARCH ************')
    })

    it('Listing products', ()=>{
        cy.log('********* LIST OF PRODUCTS ************')
    })
})