describe('Alert Cypress Tests', ()=>{

    //1. Simple alert, alert with 'OK'
    it('JS alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click()
        
        //Trigger event to get alert text, please refer below link
        //https://docs.cypress.io/api/cypress-api/catalog-of-events
        cy.on('window:alert', (text)=>{
            expect(text).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    //2.1 Confirmation alert, alert with 'OK' and 'Cancel'
    it('JS Confirmation alert - OK', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Default OK as Cypress automatically closes confirmation window
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:confirm', (text)=>{
            expect(text).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    //2.2 Confirmation alert, alert with 'OK' and 'Cancel'
    it('JS Confirmation alert - Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //Default OK as Cypress automatically closes confirmation window
        cy.get("button[onclick='jsConfirm()']").click()
        
        cy.on('window:confirm', (text)=>{
            expect(text).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=> false) //Cypress closes confirm alert with cancel button
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //3.1 Javascript Prompt alert
    it('JS Promt alert - Default OK click', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text', 'You entered: welcome')    
        
    })

    //3.2 Javascript Prompt alert
    it.only('JS Promt alert - click cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })  

        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:confirm', ()=> false)
        //cy.get('#result').should('have.text', 'You entered: null')   //Need to checkout why this command isn't working
        
    })
})