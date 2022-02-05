const mongoose = require('mongoose')
const hotelModel = require('../models/hotels')
const roomModel = require('../models/room')

mongoose.connect('mongodb://localhost:27017/trippy', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server was connected to the Database");
    }
})

const addHotels = async () => {
    try {
        const roomOne = await roomModel.findOne({
            people: 2,
            price: 80,
            hasBathroom: true
        })
        const roomTwo = await roomModel.findOne({
            people: 1,
            price: 50,
            hasBathroom: false
        })
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
                priceCategory: 1,
                rooms: roomOne._id
            },
            {
                name: "Tivoli",
                address: "12 street M.J",
                city: "New-York",
                country: "USA",
                stars: 6,
                hasSpa: true,
                hasPool: true,
                priceCategory: 2,
                rooms: roomTwo._id
            }
        ])
        console.log("The hotels collection was recreated with the base data");
    } catch (err) {
        console.log(err);
    }
}

addHotels()