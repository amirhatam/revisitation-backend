const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const users = require('./routes/user')

mongoose.connect('mongodb://localhost:27017/validation', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("I'm connected to the Database");
    }
})


const port = 9000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', users)

app.listen(port, () => {
    console.log('Server connected on port', port);
})