const Movie = require('../models/Movie');
const Translation = require('../models/Translation');
const { saveMovie, saveTranslations, getMovieById } = require('../daos/movies');
const { setupTestDb, removeAllCollections, dropAllCollections } = require('./helper');
const mockMovie = require('./mock').movie
const mockTranslations = require('./mock').translations
let db



beforeAll(async () => db = await setupTestDb('movie_api_db_unit_test'))

afterEach(async () => await removeAllCollections(db))

afterAll(async () => await dropAllCollections(db))

describe('Dao methods testing', () => {

    it('saveMovie() should persist object correctly', async () => {
        const result = await saveMovie(mockMovie)
        expect(result).toHaveProperty('_id', mockMovie.id)
    })

    it('saveTranslations() should persist object correctly', async () => {
        const result = await saveTranslations(mockTranslations)
        expect(result).toHaveProperty('_id', mockTranslations.id)
        expect(result).toHaveProperty('translations')
    })

    it('getMovieById() should retrieve movie previously saved with transcriptions', async () => {
        try {
            await new Movie(mockMovie).save()
            await new Translation(mockTranslations).save()
        } catch (error) {
            throw new Error(`Error saving into database: \n${error.message}`)
        }

        const result = await getMovieById(mockMovie.id)

        expect(result.movie).toHaveProperty('_id', mockMovie.id)
        expect(result.movie).toHaveProperty('adult', mockMovie.adult)
        expect(result.translations).toHaveProperty('_id', mockTranslations.id)
        expect(result.translations).toHaveProperty('translations')
    })

})

