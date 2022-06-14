const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');

const secret = 'mysecretsecret';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine('hbs', hbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('./public'));

app.use(cookieParser());

const userSessions = {};

app.get('/', async (req, res) => {

    if (req.cookies['jtoken']) {
        let token = req.cookies['jtoken'];
        let decodedToken = await jwt.verify(token, secret);
        res.render('home', { email: decodedToken.email })
    } else {
        res.render('home', { email: 'guest' })
    }

});

app.get('/register', (req, res) => {
    res.render('register')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/register', async (req, res) => {

    const { email, password } = req.body;
    const salt = 10;

    if (userSessions[email]) {
        return res.status(400).send('There is already such a user !!!')
    }

    const hash = await bcrypt.hash(password, salt);

    userSessions[email] = {
        email,
        password: hash
    }

    res.redirect('/login')
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;

    if (!userSessions[email]) {
        return res.status(401).send('Email or password do not match !!!')
    }

    let isAuthenticated = await bcrypt.compare(password, userSessions[email].password);

    if (!isAuthenticated) {
        return res.status(401).send('Email or password do not match !!!')
    }

    let payload = { email }
    let options = { expiresIn: '2d' }
    let token = await jwt.sign(payload, secret, options);

    res.cookie('jtoken', token)

    res.redirect('/profile')
})


app.get('/profile', async (req, res) => {
    let token = req.cookies['jtoken'];

    if (token) {
        let decodedToken = await jwt.verify(token, secret);

        res.render('profile', { email: decodedToken.email })
    } else {
        res.render('profile', { email: 'guest' })
    }

})


app.listen(5000, console.log.bind(console, 'App is running on http://localhost:5000 ...'));