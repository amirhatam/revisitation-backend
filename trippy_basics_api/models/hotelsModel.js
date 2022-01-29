const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: Number,
    date: { type: Date, default: Date.now }
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel