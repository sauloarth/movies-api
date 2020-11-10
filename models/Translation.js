const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    translations: [{
        iso_3166_1: String,
        iso_639_1: String,
        name: String,
        english_name: String,
        data: {
            title: String,
            overview: String,
            homepage: String
        }
    }]

});

module.exports = mongoose.model('Translation', schema);