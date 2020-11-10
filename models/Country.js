const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: String, //iso_3166_1
    name: String,
}, { _id: false });

module.exports = mongoose.model('Country', schema);