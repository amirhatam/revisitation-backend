const express = require('express')
const multer = require('multer')
const cors = require("cors")
const fs = require("fs");
const path = require("path");

const upload = multer({ dest: 'public/uploads/' })

const port = 8000

const app = express()
app.use(cors())
app.use(express.static('public'))

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    res.send('Ok')
})


app.listen(port, () => {
    console.log('Server Connected');

})
