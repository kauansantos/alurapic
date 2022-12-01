describe('Login de usuarios no alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

        //cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {

        //statusCode: 400
        //}).as('stubPost')
    })

    it('Fazer login de usuario valido', () => {
        cy.login('flavio', '123')
        //cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible')
    })

    it('Fazer login de usuario invalido', () => {
        cy.login('flavio', '12345678')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})