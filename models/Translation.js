const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: { type: Number, alias: 'id' },
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

}, { _id: false });

module.exports = mongoose.model('Translation', schema);