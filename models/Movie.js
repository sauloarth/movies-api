const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    adult: Boolean,
    backdrop_path: String,
    belongs_to_collection: { type: mongoose.Schema.Types.ObjectId },
    budget: Number,
    genres: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
    homepage: String,
    imdb_id: { type: String, minlength: 9, maxlength: 9, validate: /^tt[0-9]{7}/ },
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    production_companies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }],
    production_coutries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }],
    release_date: Date,
    revenue: Number,
    runtime: Number,
    spoken_languages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }],
    status: { type: String, enum: ["Rumored", "Planned", "In Production", "Post Production", "Released", "Canceled"] },
    tagline: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number,
});

module.exports = mongoose.model('Movie', schema);

