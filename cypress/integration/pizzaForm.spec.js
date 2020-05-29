describe('Form Inputs', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')    
    })
    it('can click on build your pizza link', () => {
        cy.get('.buildPizza')
        .click()
    })
    it('button is disabled', () => {
        cy.get('button')
        .should('be.disabled')
    })
    it('can type a name', () => {
        cy.get('input[name="name"]')
        .type('Jane')
        .should('have.value', 'Jane')
    })
    it('can can pick a pizza size', () => {
        cy.get('select[name="pizza_size"]')
        .select('small')
        .should('have.value', 'small')
    })
    it('can pick a sauce', () => {
        cy.get('input[name="sauce"]')
        .check('red')
        .should('have.value', 'red')
    })
    it('can pick a topping', () => {
        cy.get('input[name="pepperoni"]')
        .check()
        .should('have.checked', "pepperoni")
    })
    it('can pick a second topping', () => {
        cy.get('input[name="green_pepper"]')
        .check()
        .should('have.checked', "green_pepper")
    })
    it('can pick a third topping', () => {
        cy.get('input[name="onion"]')
        .check()
        .should('have.checked', "onion")
    })
    it('can type in textarea', () => {
        cy.get('textarea[name="special_instructions"]')
        .type('curb side pickup')
        .should('have.value', "curb side pickup")
    })
    it('button is no longer disabled and can submit', () => {
        cy.get('button')
        .should('not.be.disabled')
        .click()
        cy.get('.yourOrder').contains('Jane')
    })
})