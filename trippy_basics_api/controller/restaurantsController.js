const restaurantsModel = require('../models/restaurants')
const expressValidator = require("express-validator");

const getRestaurantes = async (req, res) => {

    try {
        const restaurants = await restaurantsModel.find().lean()

        res.json(restaurants)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addRestaurants = async (req, res) => {
    try {
        const newData = req.body
        const errors = expressValidator.validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newRestaurant = await restaurantsModel.create(newData)

            res.json({ message: "The restaurant was created", newRestaurant })
        }

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
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
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const updateRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.id

        //update with query
        const queryData = req.query.name
        const updateRestaurant = await restaurantsModel.updateOne({ _id: restaurantId }, { name: queryData })

        //update with body
        // const newData = req.body
        // const updateRestaurant = await restaurantsModel.updateOne({ _id: hotel }, newData)

        res.json({
            message: "Restaurant was updated",
            updateRestaurant
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = req.params.id
        const deleteRestaurant = await restaurantsModel.deleteOne({ _id: restaurant })

        res.json({
            message: "Restaurant was deleted",
            deleteRestaurant
        })

    } catch (err) {
        res.status(500).json({ message: "There was a problem", err })
    }
}

module.exports = { getRestaurantes, addRestaurants, getRestaurant, updateRestaurant, deleteRestaurant }