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

const getHotelById = async (req, res) => {

    try {
        const hotelId = req.params.id
        const hotel = await hotelModel.findById(hotelId)

        if (hotel) {
            res.json(hotel)
        } else {
            res.json({
                message: "Hotel not found"
            })
        }

    } catch (err) {
        console.log(err);
    }

}


module.exports = { getHotels, addHotel, getHotelById }