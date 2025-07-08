const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticao')
const postTranferencias = require('../fixtures/postTransferencias.json')

describe('Transferências', () => {
    describe('POST Transferências',  () => {
        let token

        beforeEach(async () => {
             token = await obterToken('Julio.lima', '123456')
        })
        
        it('Deve retornar sucesso com 201 quando o valor da transferência for acima de R$ 10,00', async () => {
            const bodyTransferencia = {...postTranferencias}
            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia)
            expect(resposta.status).to.be.equal(201)
            console.log(resposta.body)
        })
        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            const bodyTransferencia = {...postTranferencias}
            bodyTransferencia.valor = 7
            const resposta =  await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                'contaOrigem': 1,
                'contaDestino': 2,
                'valor': 7,
                'token': ''
                })
            expect(resposta.status).to.be.equal(422)
            console.log(resposta.body)
        })

    })
})