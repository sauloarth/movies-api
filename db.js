const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options)
    .then(console.log('Connected with MongoDB'))
    .catch(err => console.log(err))

module.exports = mongoose.connection