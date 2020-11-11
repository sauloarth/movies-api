const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: { type: Number, alias: 'id' },
    adult: Boolean,
    backdrop_path: String,
    belongs_to_collection: {},
    budget: Number,
    genres: [{ _id: { type: Number, alias: 'id' }, name: String }],
    homepage: String,
    imdb_id: { type: String, minlength: 9, maxlength: 9, validate: /^tt[0-9]{7}/ },
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    production_companies: [{
        _id: { type: Number, alias: 'id' },
        name: String,
        logo_path: String,
        origin_country: String
    }],
    production_coutries: [{
        iso_3166_1: String,
        name: String
    }],
    release_date: Date,
    revenue: Number,
    runtime: Number,
    spoken_languages: [{
        name: String,
        iso_639_1: String,
    }],
    status: { type: String, enum: ["Rumored", "Planned", "In Production", "Post Production", "Released", "Canceled"] },
    tagline: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number,
}, { _id: false });

module.exports = mongoose.model('Movie', schema);

