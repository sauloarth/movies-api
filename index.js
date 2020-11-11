const express = require('express');
const app = express();
const db = require('./db')
const cors = require('cors');
const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', routes)

const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('Server running on port ', port)
})

module.exports = app