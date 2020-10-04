/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', { browser: '!firefox'}, () => {
    it('Login de usuario', () => {
        //preparação
        login.acessarLogin()
        //Açãp
        login.preencherFormulario()
        login.submeterFormulario()
        //verificação
        login.verificarSeOLoginFoiRealizadoComSucesso()
    });
});