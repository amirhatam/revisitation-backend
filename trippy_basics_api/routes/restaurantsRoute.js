const express = require('express')
const router = express.Router()
const { getRestaurantes, addRestaurants, getRestaurant, updateRestaurant } = require("../controller/restaurantsController")

router.get('/', getRestaurantes)
router.post('/', addRestaurants)
router.get('/:id', getRestaurant)
router.put('/:id', updateRestaurant)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router
