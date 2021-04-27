describe('tests api tasteDive', () => {
    let datas = require('../fixtures/examplesTasteDiveApi.json')
    datas.forEach((data) => {
        it('data ${data.q}: ${data.type}: ${d.limit}', () => {
            cy.tasteDiveApi(data.q, data.type, data.limit).then(response => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('Similar')
                expect(response.body.Similar).to.have.property('Results')
                expect(response.body.Similar).to.have.property('Info')
                expect(response.body.Similar.Info[0].Name).to.eq(data.q)
                expect(response.body.Similar.Results).to.have.lengthOf(data.limit)
               
                
            })

        })


    })
})
