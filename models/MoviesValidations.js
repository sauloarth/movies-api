const { body, param } = require('express-validator');
const Movie = require('./Movie');

exports.gettingMovieFromTMDbValidation = (
    body('movieId', 'Must be a valid id')
        .isInt()
        .custom(id => {
            return Movie.findOne({ _id: id })
                .then(movie => {
                    if (movie) return Promise.reject(`Movie with this id (${movie.original_title}) is already in db. Use specific HTTP method to update it.`);
                })
        })
)

exports.gettingMovieByIdValidation = (
    param('movieId', 'Must be a valid id')
        .isInt()
)

exports.updatingMovieFromTMDbValidation = (
    body('movieId', 'Must be a valid id')
        .isInt()
        .custom(id => {
            return Movie.findOne({ _id: id })
                .then(movie => {
                    if (!movie) return Promise.reject(`No movie with id ${id} to be updated. Fetch the movie first.`);
                })
        })
)