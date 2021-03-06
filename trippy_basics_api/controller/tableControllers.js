const tableModel = require("../models/table")

const getTables = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
        const page = parseInt(req.query.page);// Make sure to parse the page to number

        const tables = await tableModel.find().lean()

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {} //add results section in array data

        //add next & previous data in array data 
        if (endIndex < tables.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        results.results = tables.slice(startIndex, endIndex)

        res.json(results)
    } catch (error) {
        res.status(500).json({ errorMessage: "There was a problem :(", error })

    }
}

module.exports = { getTables }