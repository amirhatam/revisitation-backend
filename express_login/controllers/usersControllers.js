const userModel = require('../models/user')

const getUsers = async (req, res) => {

    try {
        // const users = await userModel.find().exec()

        // res.json(users)
        res.json("TEST")

    } catch (err) {
        console.log(err);

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = { getUsers }