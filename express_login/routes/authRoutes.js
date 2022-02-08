const express = require('express')
const router = express.Router()
const { signup } = require("../controllers/authController")
const { validationSignup } = require("../middlewares/ValidationMiddlewares")

router.post('/', validationSignup, signup)




router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router