const Movie = require('../models/Movie');
const Translation = require('../models/Translation');

exports.saveMovie = async (movie) => {
    try {
        return await Movie.findOneAndUpdate(
            { _id: movie.id },
            new Movie(movie),
            { upsert: true, new: true },

        )
    } catch (error) {
        throw new Error(`Error saving movie in database: \n${error.message}`)
    }
}

exports.saveTranslations = async (translations) => {
    try {
        return await Translation.findOneAndUpdate(
            { _id: translations.id },
            new Translation(translations),
            { upsert: true, new: true },

        )
    } catch (error) {
        throw new Error(`Error translations in database: \n${error.message}`)
    }
}

exports.getMovieById = async (movieId) => {
    const movie = await Movie.findOne({ _id: movieId })
        .orFail(new NotFoundError("Movie was not found.", 404))

    const translations = await Translation.findOne({ _id: movieId })
    return { movie, translations }
}

exports.getAllMovies = async () => {

    try {
        const movies = await Movie.find()
            .orFail(new NotFoundError("Has no movies in database. Fetch from TMDB first.", 404))
        const result = movies.map(async movie => {
            translations = await Translation.findOne({ _id: movie._id })
            return { movie, translations }
        })

        return await Promise.all(result)
    } catch (error) {

    }
}

class NotFoundError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}