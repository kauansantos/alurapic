describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.wait(3000)
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('Verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('kauan')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('Verifica mensagens de full name invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="fullName"]').type('k')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
    })

    it('Verifica mensagens de user name invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="userName"]').type('k')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
    })

    it('Verifica mensagens de user name invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="userName"]').type('TESTE')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })

    it('Verifica mensagens de user name ja existente', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="userName"]').type('flavio')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Username already taken').should('be.visible')
    })

    it('Verifica mensagens de user name valido', () => {
        cy.contains('a', 'Register now').click()

        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        cy.get('input[formcontrolname="userName"]').type(testname)
        //cy.contains('button', 'Register').click()
        cy.contains('small', 'User available').should('be.visible')
    })

    it('Verifica mensagens de password invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })
})