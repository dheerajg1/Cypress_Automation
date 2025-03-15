describe('Frames', ()=>{

    it('Approach 1 ', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe= cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap())

        iframe.clear().type('Welcome {cmd+a}')

        cy.get("[aria-lable='Bold']").click();
    })
    
    it.only('Approach 2 - Using custom cypress command ', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')

        cy.get("[aria-lable='Bold']").click();
    })
})