/// <reference types="cypress" />
import cadastro from '../support/pages/cadastro'
import Routes from '../support/routes'
const faker = require('faker')

context('Cadastro', () => {

    beforeEach(() => {
        //preparação
        cadastro.acessarSignUp();
    });
    
    it('Cadastro novo usuário', () => {
        //Ação
        cadastro.preencherFormulario();
        cadastro.submeterFormulario();

        //verificação utilizando rotas
        cadastro.verificarSeOUserFoiCadastradoComSucesso();
    });
});

 //preparação
  //Ação
  //Verificaçao

