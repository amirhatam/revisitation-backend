const restaurantsModel = require('../models/restaurantsModel')

const getRestaurantes = async (req, res) => {

    try {
        const restaurants = await restaurantsModel.find().exec()

        res.json(restaurants)
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = { getRestaurantes }