const express = require('express');
const app = express();
const db = require('./db')
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('Server running on port ', port)
})

module.exports = app