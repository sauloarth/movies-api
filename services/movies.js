const dao = require('../daos/movies');
const responses = require('../utils/responses')
const superagent = require('superagent');
const prefix = require('superagent-prefix')('https://api.themoviedb.org/3/movie')

const { TMDB_API_KEY } = process.env

exports.getMovieFromTMDb = async (req, res) => {
    try {
        const movieId = req.body.movieId
        let movie = await superagent
            .get(`/${movieId}`)
            .query({ api_key: TMDB_API_KEY })
            .use(prefix)
            .then(response => dao.saveMovie(response.body))

        let translations = await superagent
            .get(`/${movieId}/translations`)
            .query({ api_key: TMDB_API_KEY })
            .use(prefix)
            .then(response => dao.saveTranslations(response.body))

        const msg = `Movie "${movie.original_title}" and info about its ${translations.translations.length} subtitles was saved into db.`
        return responses.sucess(res, msg)

    } catch (error) {
        if (error.status) {
            const message = JSON.parse(error.response.text).status_message
            switch (error.status) {
                case 401:
                    return responses.unauthorized(res, message)
                    break;
                case 404:
                    return responses.notFound(res, message)
                    break;
                default:
                    return responses.error(res, message);
                    break;
            }
        }

        return responses.error(res, error.message);
    }
}

exports.getMoviesById = async (req, res) => {
    try {
        const movieId = req.params.movieId
        const result = await dao.getMovieById(movieId)
        return responses.sucess(res, result)
    } catch (error) {
        if (error.status == 404)
            return responses.notFound(res, error.message);

        return responses.error(res, error.message);
    }
}

exports.getAllMoviesFromApi = async (req, res) => {
    try {
        const result = await dao.getAllMovies()
        return responses.sucess(res, result)
    } catch (error) {
        if (error.status == 404)
            return responses.notFound(res, error.message);

        return responses.error(res, error.message);
    }
}
