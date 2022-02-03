const express = require('express')
const router = express.Router()
const { getHotels, addHotel, getHotel, updateHotel, deleteHotel } = require("../controller/hotelsController")
const validationHotels = require('../middlewares/validationsMiddlewares')

router.get('/', getHotels)
router.post('/', validationHotels, addHotel)
router.get('/:id', getHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router