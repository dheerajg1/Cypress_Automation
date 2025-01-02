
describe("CSS Locators",()=>{

    it("CSSLocators",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin");
        cy.get("input[name='password']").type("admin123");
        cy.get("button[type='submit']").click();

        cy.get("button.oxd-glass-button[type='button']").should('be.visible')
    })
})