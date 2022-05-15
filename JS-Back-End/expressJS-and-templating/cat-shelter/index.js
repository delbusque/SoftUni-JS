const express = require('express');
const fs = require('fs');

const { engine } = require('express-handlebars');
const catController = require('./controllers/catController.js')

const app = express();

app.use(express.static('public'))

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use('/cats', catController)


app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        let catData = JSON.parse(data);

        res.render('home', {
            catData
        })
    })
})





app.listen(5000, () => console.log("App running on port 5000..."));