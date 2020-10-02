/// <reference types="cypress" />

const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario(){
        ///Preencher o formulario do artigo
        cy.get(el.inputTitle).type('Agilizei Title');
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.inputAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type('cypress');
    }  

    submeterPublicacao(){
        ///Submeter o artigo

         cy.get(el.buttomSubmit).click();
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        cy.wait(`@${Routes.as.postArticles}`).then((postArticleResponse) => {
            expect(postArticleResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getAticleTitle}`).then((getArticleTitleResponse) => {
            expect(getArticleTitleResponse.status).to.eq(200)
        });

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.status).to.eq(200)
        });
    }
}
export default new Articles()