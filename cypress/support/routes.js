class Routes {

    as = {
        postArticles: 'POSTArticles',
        getAticleTitle: 'GETAticleTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postUsers: 'POSTUsers',
        getTags: 'GetTags',
        getFeeds: 'GetFeeds',
        postUsersLogin: 'PostUsersLogin'

    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles' ).as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**' ).as(this.as.getAticleTitle);
        cy.route('GET', '**/api/articles/agilizei-title-**/comments' ).as(this.as.getArticlesTitleComments);
        cy.route('Post', '**/api/users' ).as(this.as.postUsers);
        cy.route('Get', '**/api/tags' ).as(this.as.getTags);
        cy.route('Get', '**/api/articles/feed?limit=10&offset=0' ).as(this.as.getFeeds);
        cy.route('Post', '**/api/users/login' ).as(this.as.postUsersLogin);

    }
}
export default new Routes()


