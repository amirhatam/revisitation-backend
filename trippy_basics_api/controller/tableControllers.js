const tableModel = require("../models/table")

const getTables = async (req, res) => {
    try {
        const tables = await tableModel.find().lean()
        res.json(tables)
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })

    }
}

module.exports = { getTables }