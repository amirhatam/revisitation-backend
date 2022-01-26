const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String,
    date: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)

module.exports = User