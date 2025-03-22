//https://demo.nopcommerce.com/
//dheeraj.test@gmail.com
//Dheeraj@007

describe('Custom commands', ()=>{

    it('Link text tests using custom command', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.clickLink('About Us') //Custom command
    })

    it('Override existing command, making contains case insensitive', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.clickLink('about us') //Custom command
    })

    it.only('login function', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123')
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })
})