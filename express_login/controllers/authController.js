const userModel = require("../models/user")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req, res) => {
    try {
        const { email, firstName, surname, birthday } = req.body
        const password = bcryptjs.hashSync(req.body.password)

        const user = await userModel.create({
            email, firstName, surname, birthday, password
        })
        res.json({
            message: "User was created !",
            user
        })
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })

    }

}

module.exports = { signup }