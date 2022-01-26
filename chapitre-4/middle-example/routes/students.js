const express = require("express")
const router = express.Router()
const { getStudents, addStudent } = require("../controllers/students")
const debug = require("../middlewares/debug")


router.get('/', debug, getStudents)
router.post('/', debug, addStudent)


router.all("*", (req, res) => {
    res.json({
        message: "The route was not found"
    })
})

module.exports = router