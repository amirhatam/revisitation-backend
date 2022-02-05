const express = require('express')
const router = express.Router()
const { getTables } = require('../controller/tableControllers')

router.get('/', getTables)

router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})
module.exports = router
