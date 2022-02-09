const express = require('express')
const router = express.Router()
const { getUsers } = require("../controllers/usersControllers")

router.get('/', getUsers)



router.all("*", (req, res) => {
    res.json = ({
        message: 'The route was not found !'
    })
})

module.exports = router