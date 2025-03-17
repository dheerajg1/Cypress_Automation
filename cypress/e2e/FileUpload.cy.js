require ('cypress-file-upload');

describe('File upload scenarios', ()=>{
    
    it('Single file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('cypress1.pdf');
        cy.get('#file-submit').click();

        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!');
    })

    it('Single file upload with renaming', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath: 'cypress1.pdf', fileName: 'myCypress1.pdf'});
        cy.get('#file-submit').click();

        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!');

    })

    it('File upload - drag and drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("cypress1.pdf", {subjectType: 'drag-n-drop'});
        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('cypress1.pdf')

        cy.get('#file-submit').click();
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!');
    })

    it('Multiple files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(["cypress1.pdf", "cypress2.pdf"]);
        cy.wait(3000)

        cy.get('#fileList > li').should('not.have.text', 'No Files Selected')

    })

    it.only('File upload within shadow dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('cypress1.pdf')
        cy.wait(3000)

        cy.get('.smart-item-name', {includeShadowDom: true}).contains('cypress1.pdf')
    })
})