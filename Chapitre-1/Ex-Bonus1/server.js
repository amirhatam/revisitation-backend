const express = require('express')
const countryData = require("./countryData.js")

const app = express()


app.get('/', (req, res) => {
    res.json("Im Here !")
})

app.get('/countries-data', (req, res) => {
    res.json(countryData)
})

app.get('/list-countries', (req, res) => {
    const listCountries = countryData.map((e) => {

        // return e.name
        return e
    })
    // res.json({ listCountries })
    res.json(listCountries)
})



const port = 8001

app.listen(port, () => {
    console.log("Server was connected", port);
})