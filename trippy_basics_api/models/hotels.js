const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    stars: { type: Number, min: 1, max: 7, required: true },
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: { type: Number, min: 1, max: 3 },
    date: { type: Date, default: Date.now }
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel