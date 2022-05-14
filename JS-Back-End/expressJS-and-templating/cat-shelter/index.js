const express = require('express');
const { engine } = require('express-handlebars');
const catController = require('./controllers/catController.js')

const app = express();

app.use(express.static('public'))

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use('/cats', catController)


app.get('/', (req, res) => {
    res.render('home')
})





app.listen(5000, () => console.log("App running on port 5000..."));