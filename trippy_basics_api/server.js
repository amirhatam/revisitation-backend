const express = require("express");
const cors = require("cors")
const mongoose = require('mongoose')
const hotels = require('./routes/hotelsRoute')
const restaurants = require('./routes/restaurantsRoute')

mongoose.connect('mongodb://localhost:27017/trippy', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server was connected to the Database");
    }
})



const app = express()

app.use(cors())
app.use(express.json())

app.use('/hotels', hotels)
app.use('/restaurants', restaurants)

const port = 8000
app.listen(port, () => {
    console.log("Server connected on port ", port);
})