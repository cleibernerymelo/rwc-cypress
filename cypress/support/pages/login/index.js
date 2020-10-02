const el = require('./elements').ELEMENTS

class Login {

    acessarLogin() {
        //acessar a pagina de login
        cy.visit('/login');
    }
    preencherFormulario(){
        //preencher o formulario
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }
    submeterFormulario(){
        //submeter o formulario de login
        cy.get(el.buttomSubmit).click();
    }
}
export default new Login()