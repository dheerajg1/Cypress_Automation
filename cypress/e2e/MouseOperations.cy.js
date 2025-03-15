import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('Mouse Operations', ()=>{

    it('Mouseover', ()=>    {
        cy.visit('https://www.eviltester.com/post/applications-to-practice-testing-and-automating/');

        cy.get(".rootdropdownmenuitem .dropdownmenu .dropdownmenuitem > a[href='/page/books/java-for-testers/']")
        .should('not.be.visible')

        cy.get('#cssmenu > :nth-child(1) > :nth-child(3) > :nth-child(1)').trigger('mouseover').click()

        cy.get(".rootdropdownmenuitem .dropdownmenu .dropdownmenuitem > a[href='/page/books/java-for-testers/']")
        .should('be.visible')
        
    })

    it('Right click - Approach 1 with trigger function', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('not.be.visible')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible')

    })

    it('Right click - Approch 2 with rightclick fun', ()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('not.be.visible')
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible')
    })

    it('Double click', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult'); //load iframe

        //cy.iframe("iframeResult").find('button[ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe("iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("iframeResult").find('#field2').should('have.value', 'Hello World!');
    })

    it('Drag and drop using plugin', ()=>{
        
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

        cy.get('#box6').drag('#box106', {force: true})
    })

    it.only('Page scrolling', ()=>{
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
        cy.get("body > div:nth-child(19) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(79) > div:nth-child(1) > div:nth-child(2)").scrollIntoView({duration: 2000});
        cy.get("body > div:nth-child(19) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(79) > div:nth-child(1) > div:nth-child(2)").should('be.visible');
        cy.get("body > div:nth-child(19) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(79) > div:nth-child(1) > div:nth-child(2)").should('have.text', 'India')
    })

})