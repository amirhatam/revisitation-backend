const userModel = require("../models/user")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("../utils/config")



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

const login = async (req, res) => {
    const tokenExpire = "4h"
    try {
        const email = req.body.email
        const password = req.body.password

        const validUser = await userModel.findOne({ email: email })

        const result = bcryptjs.compareSync(password, validUser.password)

        if (result) {
            console.log("User in connected")
            const token = jwt.sign(
                {
                    id: result._id
                },
                config.secret,
                {
                    expiresIn: tokenExpire
                }
            )
            console.log("User token: ", token, "are expire in:", tokenExpire)
            res.status(200).json({
                message: "User connected",
                validUser,
                token,
                tokenExpire
            })

        } else {
            res.status(401).json({ message: "Login failed" })

        }

    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })
    }

}

module.exports = { signup, login }