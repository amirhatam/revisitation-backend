const express = require('express')
const router = express.Router()
const { getHotels, addHotel, getHotel, updateHotel, deleteHotel } = require("../controllers/hotelsController")

router.get('/', getHotels)
router.post('/', addHotel)
router.get('/:id', getHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router