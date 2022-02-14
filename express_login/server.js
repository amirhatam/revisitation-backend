const express = require('express')
const mongoose = require('mongoose')
const config = require("./utils/config")
const auth = require('./routes/authRoutes')
const users = require("./routes/usersRoutes")


mongoose.connect(config.mongoUrls, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There was a problem from connection to the database");
    } else {
        console.log("I'm connected to the database");
    }
})

const port = config.port
// console.log(port);
const app = express()

app.use(express.json())

app.use('/auth', auth)

app.use('/users', users)


app.listen(port, () => {
    console.log('Server connected on port', port);
})