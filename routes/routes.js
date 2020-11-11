const api = require('express')();
const moviesRoutes = require('./movies');

api.use('/movie', moviesRoutes);

module.exports = api;