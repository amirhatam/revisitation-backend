const roomModel = require('../models/room')

const getRooms = async (req, res) => {
    try {
        const rooms = await roomModel.find().lean()

        res.json(rooms)
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })

    }
}

module.exports = getRooms