/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', { browser: '!firefox'}, () => {
    it('Login de usuario', () => {
        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()
        //verificação
    });
});