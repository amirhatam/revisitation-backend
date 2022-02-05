const mongoose = require('mongoose')
const restaurantsModel = require('../models/restaurants')
const tablesModel = require('../models/table')


mongoose.connect('mongodb://localhost:27017/trippy', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server was connected to the Database");
    }
})

const addRestaurants = async () => {
    try {
        const tableVIP = await tablesModel.findOne({
            seat: 2,
            isVIP: true
        })

        await restaurantsModel.deleteMany({})
        await restaurantsModel.insertMany([
            {
                name: "HBC",
                address: "12 street M.J",
                city: "New-York",
                country: "USA",
                stars: 6,
                cuisine: 4,
                priceCategory: 2,
                tables: tableVIP._id
            }
        ])
        console.log("The restaurants collection was recreated with the base data");
    } catch (err) {
        console.log(err);
    }
}

addRestaurants()