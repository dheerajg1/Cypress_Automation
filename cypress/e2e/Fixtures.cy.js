describe('Fixtures and Data driven testing', ()=>{
    
    it.skip('Fixture - Direct access test data', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.fixture('orangeHRM').then((data)=>{

            cy.get('input[placeholder="Username"]').clear().type(data.username);
            cy.get('input[placeholder="Password"]').clear().type(data.password);
            cy.get('button[type="submit"]').click();

            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', data.expected);
        })
    })

    //access through hook - to use at multiple scenarios
    let userdata;
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            userdata = data;
        })
    })

    it('Fixture - using hook', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.fixture('orangeHRM').then((data)=>{

            cy.get('input[placeholder="Username"]').clear().type(userdata.username);
            cy.get('input[placeholder="Password"]').clear().type(userdata.password);
            cy.get('button[type="submit"]').click();

            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expected);
        })
    })

})