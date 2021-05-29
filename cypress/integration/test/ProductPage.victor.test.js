/// <reference types="cypress"/>

describe("Product Page Test", ()=>{
    before(()=>{
        cy.log("Testing Started")
        cy.viewport(1920,1080)
        cy.wait(1000)
        cy.visit("http://localhost/Cypress-Testing/E-commerce/index.html")
        cy.screenshot()
    })
    beforeEach(() =>{
        cy.log("Started a Test Case")
        cy.url().should("include", "E-commerce")
    })
    afterEach(() =>{
        cy.log("Ended a Test Case")
        cy.wait(1000)
    })
    after(()=>{
        cy.log("Testing Completed")
    })

    it("",()=>{

    })
})

