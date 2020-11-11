const service = require('../services/movies')
const responses = require('../utils/responses')
const validations = require('../models/MoviesValidations')
const { validationResult } = require('express-validator')

exports.getMovieFromTMDb = [
    validations.gettingMovieFromTMDbValidation,
    handleValidationResults,
    service.getMovieFromTMDb,
]

exports.getMoviesFromApiById = [
    validations.gettingMovieByIdValidation,
    handleValidationResults,
    service.getMoviesById,
]

exports.getAllMoviesFromApi = [
    service.getAllMoviesFromApi
]

exports.updateMovieFromTMDb = [
    validations.updatingMovieFromTMDbValidation,
    handleValidationResults,
    service.getMovieFromTMDb,
]


function handleValidationResults(req, res, next) {
    const errors = [...validationResult(req).errors];
    if (errors.length > 0) {
        return responses.validationError(res, 'Validation errors', errors);
    }
    next()
} 