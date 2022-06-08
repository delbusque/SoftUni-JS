const express = require('express');
const fs = require('fs/promises');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const uniqid = require('uniqid');

const secret = 'mysecretsecret';

const app = express();

app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'jknfvkjbsdkvbdhvbsdhfzbh34q8t7'
}))

app.get('/', (req, res) => {
    fs.readFile('./home.html', { encoding: 'utf-8' })
        .then(home => res.send(home));
});

app.get('/create/:password', (req, res) => {
    let payload = {
        password: req.params.password,
        id: uniqid()
    };

    let options = { expiresIn: '1d' };
    let token = jwt.sign(payload, secret, options);

    res.cookie('jwt', token);
    res.send(token);
});

app.get('/verify', (req, res) => {
    let token = req.cookies['jwt'];

    jwt.verify(token, secret, (err, payload) => {
        if (err) {
            return res.status(404).send(err);
        }

        res.send(payload);
    })

})

app.listen(5000, console.log.bind(console, 'App is running on port 5000 ...'));