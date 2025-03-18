describe('Data driven test', ()=>{

    it('Data driven test', ()=>{

        cy.fixture('orangehrm1').then((data)=>{
            
            data.forEach((userdata)=>{

                cy.visit('https://opensource-demo.orangehrmlive.com/')

                cy.get('input[placeholder="Username"]').clear().type(userdata.username);
                cy.get('input[placeholder="Password"]').clear().type(userdata.password);
                cy.get('button[type="submit"]').click();
                
                if(userdata.username == 'Admin' && userdata.password == 'admin123'){
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', userdata.expected);

                    //steps to logout after successful login
                    cy.get('.oxd-userdropdown-tab').click();
                    cy.wait(2000)
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                    cy.wait(2000)
                }else{
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', userdata.expected)
                }
                
            })
        })
    })
})