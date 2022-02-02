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

const addRestaurants = async (req, res) => {
    try {
        const newData = req.body
        const newRestaurant = await restaurantsModel.create(newData)

        res.json({
            message: "Restaurant was created",
            newRestaurant
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const getRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.id

        const restaurant = await restaurantsModel.findById(restaurantId)

        res.json({
            message: "Restaurant was found",
            restaurant
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = { getRestaurantes, addRestaurants, getRestaurant }