const express = require('express')
const router = express.Router()
const { getUsers, addUser, findUserByUsername, getUserByEmail } = require('../controllers/user')

router.get('/', getUsers)
router.post('/users/add', addUser)
router.get('/users/:username', findUserByUsername)
router.get('/users/email/:email', getUserByEmail)



router.all('*', (req, res) => {
    res.json({
        message: 'The route was not found '
    })
})

module.exports = router
