const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    _id: String,
    name: String,
    logo_path: String,
    origin_country: String,
}, { _id: false });

module.exports = mongoose.model('Company', schema);