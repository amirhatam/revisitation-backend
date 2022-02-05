const express = require('express')
const router = express.Router()
const getRooms = require("../controller/roomController")

router.get('/', getRooms)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router
