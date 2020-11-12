const app = require('./app')
const db = require('./db')
const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('Server running on port ', port)
})