describe("CSS hover",()=>{
    it("CSS hover",()=>{
        cy.visit('/')
        cy.get('.test').realHover()
        cy.wait(5000)
    })
})