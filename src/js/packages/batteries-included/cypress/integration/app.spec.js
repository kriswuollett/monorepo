describe('Navigation', () => {
    it('home should say', () => {
        cy.visit('http://localhost:3000/')

        // The new page should contain an h1 with "About page"
        cy.get('h1').contains('Batteries Included Next.js')
    })
})
