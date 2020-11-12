const app = require('../app')
const api = require('supertest')
const { removeAllCollections, dropAllCollections, setupTestDb } = require('./helper')
let db

beforeAll(async () => db = await setupTestDb('movie_api_db_integration_test'))

afterEach(async () => await removeAllCollections(db))

afterAll(async () => await dropAllCollections(db))

describe('Endpoints', () => {

    it('POST /movie', async () => {
        return api(app)
            .post('/movie')
            .send({ movieId: 550 })
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('message')
            })
    })

    it('POST /movie with invalid movieId', async () => {
        return api(app)
            .post('/movie')
            .send({ movieId: 463 })
            .expect(404)
            .then(response => {
                expect(response.body).toHaveProperty('message', 'The resource you requested could not be found.')
            })
    })

    it('GET /movie', async () => {
        return api(app)
            .get('/movie/550')
            .expect(404)
            .then(response => {
                expect(response.body).toHaveProperty('message', 'Movie was not found.')
            })
    })

})