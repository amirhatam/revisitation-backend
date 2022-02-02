const express = require('express')
const router = express.Router()
const { getRestaurantes, addRestaurants } = require("../controller/restaurantsController")

router.get('/', getRestaurantes)
router.post('/', addRestaurants)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router
