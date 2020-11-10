const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: String,
    name: String,
}, { _id: false });

module.exports = mongoose.model('Genre', schema);