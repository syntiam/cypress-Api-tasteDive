Cypress.Commands.add('tasteDiveApi', (query, limit,type) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        //?k= 409759-syntiame-9YQH5FDQ',
        qs: {
            q: query,
            limit: limit,
            type: type
            
        }
    })
})
           

