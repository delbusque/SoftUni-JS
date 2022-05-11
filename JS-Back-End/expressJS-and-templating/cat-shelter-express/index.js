const express = require('express');
const path = require('path')

const app = express();
const port = 5000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home/index.html'));
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})