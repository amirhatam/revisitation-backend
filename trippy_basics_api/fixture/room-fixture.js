const mongoose = require('mongoose');
const roomModel = require("../models/room")

mongoose.connect('mongodb://localhost:27017/trippy', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server was connected to the Database");
    }
})

const addRooms = async () => {
    try {
        await roomModel.deleteMany({})

        await roomModel.insertMany([
            {
                people: 2,
                price: 80,
                hasBathroom: true
            },
            {
                people: 1,
                price: 50,
                hasBathroom: false
            }
        ])
    } catch (error) {

    }
}

addRooms()