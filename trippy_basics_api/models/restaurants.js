const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: { type: Number, min: 1, max: 5 },
    cuisine: String,
    priceCategory: { type: Number, min: 1, max: 3 },
    tables: {
        type: mongoose.Types.ObjectId,
        ref: "Table"
    },
    date: { type: Date, default: Date.now }
})

const Restaurant = mongoose.model('Restaurant', (restaurantSchema))

module.exports = Restaurant