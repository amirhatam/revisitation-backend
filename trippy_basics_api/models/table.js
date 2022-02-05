const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
    seat: { type: Number, required: true },
    isVIP: Boolean,
    date: { type: Date, default: Date.now }
})

const Table = mongoose.model("Table", tableSchema)

module.exports = Table