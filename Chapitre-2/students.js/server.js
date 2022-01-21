const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.json())
// const students = ['ali', 'taghi', 'mamad', 'amir', 'hadi', 'meti']
const students = []

app.get('/students', (req, res) => {
    res.send(students)
})

app.post('/students', (req, res) => {
    const newSt = req.body
    students.push(newSt)

    res.json({
        message: 'Student added !',
    })
})

const port = 8000

app.listen(port, () => {
    console.log('Server Connected');
})