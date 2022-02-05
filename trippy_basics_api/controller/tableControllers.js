const tableModel = require("../models/table")

const getRooms = async (req, res) => {
    try {
        const rooms = await tableModel.find().lean()
        res.json(rooms)
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })

    }
}

module.exports = { getRooms }