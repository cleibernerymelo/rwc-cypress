const el = require('./elements').ELEMENTS
const faker = require('faker')
import routes from '../../routes';
import Routes from '../../routes'

class SignUp {

    acessarSignUp() {
        cy.visit('/register');
    }
    preencherFormulario(){
        cy.get(el.inputUserName).type(faker.name.firstName() + faker.name.lastName(), {force: true});
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('123456789');
    }
    submeterFormulario(){   
        cy.get(el.bottomSubmit).click();
    }

    verificarSeOUserFoiCadastradoComSucesso(){
        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
            expect(postUsersResponse.status).to.eq(200)
        });
    
        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        });
    
        cy.wait(`@${Routes.as.getFeeds}`).then((getFeedsResponse) => {
            expect(getFeedsResponse.status).to.eq(200)
        });
    }
}

export default new SignUp()