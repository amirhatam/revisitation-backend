const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    people: { type: Number, required: true },
    price: { type: Number, required: true },
    hasBathroom: Boolean
})

const Room = mongoose.model("Room", roomSchema)

module.exports = Room