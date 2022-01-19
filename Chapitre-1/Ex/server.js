const express = require('express')
const app = express()

const authorsList = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: "Beowulf"
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth"
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: "Oliver Twist, A Christmas Carol"
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: "The Picture of Dorian Gray, The Importance of Being Earnest"
    },
]

app.get('/', (req, res) => {
    res.send('Authors API')
})

app.get('/authors/:id', (req, res) => {
    const indexArray = req.params.id - 1;

    const author = authorsList[indexArray]

    const result = {
        name: author.name,
        nationality: author.nationality
    }
    res.json(result)
})

app.get('/authors/:id/books', (req, res) => {
    const indexArray = req.params.id - 1;

    const author = authorsList[indexArray]

    res.json({
        books: author.books
    })
})




const port = 8000

app.listen(port, () => {
    console.log('Server started on port', port);
})