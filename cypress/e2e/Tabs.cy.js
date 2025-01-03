describe('Handle tabs', ()=>{

    //Limitation in Approach 2 is , the domain should be same
    
    it('Approach 1 | removing target attribute so that the url opens in same tab window instead of new tab/window', ()=>{
        
        cy.visit('https://the-internet.herokuapp.com/windows');

        //can be used invoke method to remove attributes
        cy.get('.example >a').invoke('removeAttr', 'target').click();

        //verify newly opened link
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000) //wait for 5 seconds to confirm new window
        cy.go('back') //go back to parent tab
    })

    it.only('Approach 2 | Get the href attribute value i.e target page url and do cy.visit', ()=>{
        
        cy.visit('https://the-internet.herokuapp.com/windows');

        //capture the href value
        cy.get('.example >a').then(ele=>{
           let url = ele.prop('href');

           cy.visit(url);
           cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

           cy.wait(5000) //wait for 5 seconds to confirm new window
            cy.go('back') //go back to parent tab
        })
    })
})