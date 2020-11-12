const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routes)

module.exports = app