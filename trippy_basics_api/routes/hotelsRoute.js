const express = require('express')
const router = express.Router()
const { getHotels, addHotel, getHotelById } = require("../controllers/hotelsController")

router.get('/', getHotels)
router.post('/', addHotel)
router.get('/:id', getHotelById)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router