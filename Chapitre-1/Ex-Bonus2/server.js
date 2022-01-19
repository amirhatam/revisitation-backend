const express = require('express')
const pokemonData = require('./pokemonData.js')

const app = express()

app.get('/all-pokemon', (req, res) => {
    res.send(pokemonData)
})

app.get('/all-pokemon/:id', (req, res) => {

    const pokeId = req.params.id
    const urlModule = "https://pokeapi.co/api/v2/pokemon"

    console.log(pokemonData.length);
    const pokemon = pokemonData.filter((e) => {
        if (e.url === `${urlModule}/${pokeId}/`) {
            const findPokemon = e.name
            return findPokemon
        }
    })

    res.json(pokemon)
})




const port = 8000

app.listen(port, () => {
    console.log('Server was connected');
})