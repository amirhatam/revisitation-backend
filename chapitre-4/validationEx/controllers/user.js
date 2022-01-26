const userModel = require("../models/user")

const getUsers = async (req, res) => {

    try {
        const users = await userModel.find().exec()

        res.json(users)

    } catch (err) {
        console.log(err);

        rea.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const addUser = async (req, res) => {
    try {
        const newUser = req.body

        const user = await userModel.create(newUser)

        // const user = new userModel({
        //     username: newUser.username,
        //     email: newUser.email,
        //     age: newUser.age,
        //     city: newUser.city
        // })

        // const userSaved = await user.save()

        res.json({
            message: 'The user was added correctly',
            user
        })
    } catch (err) {
        console.error('Error in POST /addUser');
        res.json({
            message: 'The user was not added :('
        })
    }

}

const findUserByUsername = async (req, res) => {

    try {
        const username = req.params.username
        const user = await userModel.find({ username: username })

        if (user) {
            res.json(user)
        } else {
            res.json({
                message: "Team member not found"
            })
        }
    } catch (err) {
        console.log(err);

        rea.status(500).json({ errorMessage: "The user not found !" })
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email
        const user = await userModel.findOne({ email: email })

        if (user) {
            res.json(user)
        } else {
            res.json({
                message: "Team member not found"
            })
        }
    } catch (err) {
        console.log(err);

        rea.status(500).json({ errorMessage: "The user not found !" })
    }
}


module.exports = { getUsers, addUser, findUserByUsername, getUserByEmail }