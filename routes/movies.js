const routes = require("express").Router();
const controller = require('../controllers/movies')

routes.post('/', controller.getMovieFromTMDb)
routes.put('/', controller.updateMovieFromTMDb)
routes.get('/', controller.getAllMoviesFromApi)
routes.get('/:movieId', controller.getMoviesFromApiById)

module.exports = routes;