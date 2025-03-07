describe('Table tests', ()=>{

    beforeEach('Login', ()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.get("#input-username").clear().type('demo')
        cy.get("#input-password").clear().type('demo')
        cy.get("button[type='submit']").click()

        //Navigating to Customer list
        cy.get("#menu-customer").click();
        cy.get("#menu-customer>ul>li:first-child").click();
    })

    it('Check no of rows and columns', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 6)
    })

    it('Check cell data of specific row and cell', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(2)>td:nth-child(3)")
        .contains('mini@gmail.com');
    })

    it('Read all data from table', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })

    it('Pagination', ()=>{

        //find total no.of pages
        cy.get(".col-sm-6.text-end").then(e=>{
            let pagesInfo = e.text; //contains 'Showing 1 to 10 of 19570 (1957 Pages)'
            let totalPages = pagesInfo.substring(pagesInfo.indexOf('(')+1, pagesInfo.indexOf('Pages')-1)

            cy.log('Total no of pages : ' + totalPages)

            for(let p=1; p<=totalPages; p++){
                if(totalPages>1){
                    cy.log('Current active page : ' + p);
                    cy.get("ul[class='pagination']>li:nth-child("+p+")").click(); //clicking pagination from page 1
                    cy.wait(2000);

                    //Logic to read data from each pagination
                    //Eg. read email from each row in the current pagination

                    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get("td:nth-child(3)").then((e)=>{
                                cy.log(e.text()); //printing email column from every page until page ends
                            })
                        })
                    })
                }
            }

        })
    })
})