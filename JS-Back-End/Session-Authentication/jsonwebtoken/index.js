const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const uniqid = require('uniqid');
const { engine } = require('express-handlebars');

const secret = 'mysecretsecret';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('./public'));

app.use(cookieParser());

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    console.log(req.body);

    res.redirect('/')
})


app.listen(5000, console.log.bind(console, 'App is running on http://localhost:5000 ...'));