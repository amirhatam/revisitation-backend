const userModel = require('../models/user')

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().lean()

        res.json(users)
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })

    }
}

module.exports = getUsers