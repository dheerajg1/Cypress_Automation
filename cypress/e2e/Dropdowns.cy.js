describe('Dropdowns tests', ()=>{

    it.skip('Dropdown with Select', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('select#country')
        .select('United Kingdom')
        .should('have.value', 'uk')
    })

    it.skip('Dropdown without Select class (bootstrap dropdown)', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        //cy.get('#select2-billing_country-container').scrollIntoView({ easing: 'linear' })
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Indonesia').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Indonesia')
        
    })

    it.skip('Auto suggest dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-link').should('have.length', 6)
        //cy.get('.suggestion-link').first().click()
        cy.get('.suggestion-link').contains('Delhi University').click()
        cy.title().should('eq', 'Delhi University - Wikipedia')
        
    })

    it('Dynamic dropdown', ()=>{
        cy.visit('https://www.google.com/')

        cy.get("textarea[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length', 13)
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{

            if($el.text() == 'cypress automation jobs'){
                cy.wrap($el).click()
            }
            
        })
        
        
    })
})