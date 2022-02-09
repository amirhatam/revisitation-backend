const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    birthday: { type: Date, required: true },
    created: { type: Date, default: Date.now }
})
User = mongoose.model("User", userSchema)

module.exports = User