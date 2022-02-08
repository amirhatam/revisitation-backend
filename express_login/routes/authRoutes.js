const express = require('express')
const router = express.Router()
const { signup, login } = require("../controllers/authController")
const { validationSignup } = require("../middlewares/ValidationMiddlewares")

router.post('/signup', validationSignup, signup)
router.post('/login', login)




router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router