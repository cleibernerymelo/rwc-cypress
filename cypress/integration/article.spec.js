/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {

    beforeEach(() => {
      //preparação
       cy.backgroundLogin()
       articles.acessarFormularioDeNovaPublicacao()
    });

    it('Criar uma nova publicação', () => {
      //Ação
      articles.preencherFormulario()
      articles.submeterPublicacao()
      
      //Verificaçao utilizando rotas
    articles.verificarSeAPublicacaoFoiCriadaComSucesso()
    });

    /// Tecnica AAA --> Arrange, Active e Assert
    /// --> preparação --> ação --> verificação
});