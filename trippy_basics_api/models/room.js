const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    people: { type: Number, required: true },
    price: { type: Number, required: true },
    hasBathroom: Boolean,
    date: { type: Date, default: Date.now }
})

const Room = mongoose.model("Room", roomSchema)

module.exports = Room