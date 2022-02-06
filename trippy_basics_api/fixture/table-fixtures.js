const mongoose = require('mongoose')
const tablesModel = require('../models/table')

mongoose.connect('mongodb://localhost:27017/trippy', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server was connected to the Database");
    }
})

const addTabels = async () => {
    try {
        await tablesModel.deleteMany({})
        await tablesModel.insertMany([
            {
                seat: 2,
                isVIP: true
            },
            {
                seat: 3,
                isVIP: false
            },
            {
                seat: 4,
                isVIP: false
            },
            {
                seat: 5,
                isVIP: false
            },
            {
                seat: 6,
                isVIP: true
            },
        ])
        console.log("The tables collection was recreated with the base data");

    } catch (error) {
        console.log(error);

    }

}

addTabels()