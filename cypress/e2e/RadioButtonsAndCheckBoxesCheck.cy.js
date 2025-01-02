describe('Check UI Elements', ()=>{

    it('Checking Radio buttons', ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility checks
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible');

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked');
        cy.get("input#female").should('not.be.checked');

        cy.get("input#female").check().should('be.checked');
        cy.get("input#male").should('not.be.checked');

    })

    it('Checkbox validation', ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility checks
        cy.get("input#sunday").should('be.visible')

        //selecting all check boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselect all check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select first check box
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        //select last check box
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

    })
})