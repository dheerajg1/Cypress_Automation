describe("Assertions Demo", ()=>{

    it("Implicit Assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // cy.url().should('contain', 'orangehrmlive.com');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('include', 'orangehrm');

        // cy.url()
        // .should('contain', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('include', 'orangehrm')

        cy.url()
        .should('contain', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('include', 'orangehrm')
        .and('not.include', 'greenhrm')

        cy.title()
        .should('eq', 'OrangeHRM')
        .and('include', 'Orange')
        
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath('//a').should('have.length', 5)

        cy.get("input[name='username']")
        .type('Admin')
        .should('include.value', 'Admin')

    })

    it('Explict Assertions', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click();

        let expectedName = 'mandaaa user';

        cy.get(".oxd-userdropdown-name").then((x)=>{
            let actualName = x.text();
            //BDD Style
            expect(actualName).to.equal(expectedName)
            expect(actualName).to.not.equal('xyz')

            //TDD Style
            assert.equal(actualName, expectedName)
            assert.notEqual(actualName, 'xyz')
        })
    })
})