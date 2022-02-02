const mongoose = require('mongoose')
const hotelModel = require('../models/hotelsModel')

mongoose.connect('mongodb://localhost:27017/trippy', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server was connected to the Database");
    }
})

const addHotels = async () => {
    try {
        await hotelModel.deleteMany({})
        await hotelModel.insertMany([
            {
                name: "HBC",
                address: "12 rue Passy,16éme",
                city: "Paris",
                country: "France",
                stars: 6,
                hasSpa: true,
                hasPool: true,
                priceCategory: 200,
            },
            {
                name: "Tivoli",
                address: "12 street M.J",
                city: "New-York",
                country: "USA",
                stars: 6,
                hasSpa: true,
                hasPool: true,
                priceCategory: 250,
            }
        ])
        console.log("The hotels collection was recreated with the base data");
    } catch (err) {
        console.log(err);
    }
}

addHotels()