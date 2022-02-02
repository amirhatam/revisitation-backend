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

const getHotel = async (req, res) => {

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
        res.status(500).json({ message: "There was a problem", err })

    }

}

const updateHotel = async (req, res) => {

    try {
        const hotel = req.params.id

        //update with query
        const queryData = req.query.name
        const updateHotel = await hotelModel.updateOne({ _id: hotel }, { name: queryData })

        //update with body
        // const newData = req.body
        // const updateHotel = await hotelModel.updateOne({ _id: hotel }, newData)

        res.json({
            message: "Hotel was updated",
            updateHotel
        })

    } catch (err) {
        res.status(500).json({ message: "There was a problem", err })
    }

}

const deleteHotel = async (req, res) => {
    try {
        const hotel = req.params.id
        const deleteHotel = await hotelModel.deleteOne({ _id: hotel })

        res.json({
            message: "Hotel was deleted",
            deleteHotel
        })

    } catch (err) {
        res.status(500).json({ message: "There was a problem", err })
    }
}


module.exports = { getHotels, addHotel, getHotel, updateHotel, deleteHotel }