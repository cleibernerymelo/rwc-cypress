const el = require('./elements').ELEMENTS
import Routes from '../../routes'

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
    verificarSeOLoginFoiRealizadoComSucesso(){
        cy.wait(`@${Routes.as.postUsersLogin}`).then((postUsersLoginResponse) => {
            expect(postUsersLoginResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        });
    
        cy.wait(`@${Routes.as.getFeeds}`).then((getFeedsResponse) => {
            expect(getFeedsResponse.status).to.eq(200)
        });

    }
}
export default new Login()

