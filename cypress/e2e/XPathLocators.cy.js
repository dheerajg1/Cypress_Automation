
describe("Xpath Locators",()=>{

    it("Xpath Locators",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath("//*[@name='username']").type("Admin");
        cy.xpath("//*[@name='password']").type("admin123");

        cy.xpath("//*[contains(@class,'login-button')]").click();

        cy.xpath("//*[contains(@class, 'orangehrm-upgrade-button')]").should('be.visible');
    })

    it("Chained Xpath",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//*[@name='username']").xpath("./li").click();
    })
})