const hotelModel = require("../models/hotelsModel")

const getHotels = async (req, res) => {

    try {

        const hotels = await hotelModel.find().exec()

        res.json(hotels)
    } catch (err) {
        console.log(err);

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

}

const addHotel = async (req, res) => {
    try {
        const newHotel = req.body
        console.log(newHotel);
        const hotelAdded = await hotelModel.create(newHotel)

        res.json({
            message: 'Hotel was Added',
            hotelAdded
        })
    } catch (err) {
        console.error('Error in POST /addHotel');
        res.json({
            message: 'The hotel was not added :('
        })
    }
}

module.exports = { getHotels, addHotel }