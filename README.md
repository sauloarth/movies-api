# movies-api
Microservice to get data about movies an subtitles from TMDb Api (https://developers.themoviedb.org/3/gettingstarted/introduction), save into db and accessible by an endpoint

## Tools
* Docker Compose
* Node 12-alphane
* ExpressJS
* MongoDB 4.4.1-bionic
* Jest
* Express-validator
* Mongoose

## Using it
* clone from master or develop branch
* setup a .env file instructions below
* run docker-compose up -d from ./
* run docker-compose run --rm test npm test -- --watchAl from ./tests to run tests

## Setting up a .env
your .env file must to be at root path and contains:

* MONGO_USERNAME=xxxxxxx (any name you want)
* MONGO_PASSWORD=xxxxxxx (any name you want)
* MONGO_PORT=27017
* MONGO_DB=moviesdb (any name you want)
* TMDB_API_KEY= xxxxxxx (get on the TMDb Api)

## Endpoints

* POST http://localhost/movie { movieId: Int } (fetch data from TMDb and save into database)

* GET http://localhost/movie/{movieId} (fetch data about movie from api)

* PUT http://localhost/movie { movieId: Int } (update data from TMDb and save into database)

* GET http://localhost/movie/ (fetch data about ALL movies from api)


