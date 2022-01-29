const express = require('express')
const router = express.Router()
const { getHotels, addHotel } = require("../controllers/hotelsController")

router.get('/', getHotels)
router.post('/', addHotel)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router