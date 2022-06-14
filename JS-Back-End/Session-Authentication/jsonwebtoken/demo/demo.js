const express = require('express');
const fs = require('fs/promises');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const uniqid = require('uniqid');
const { engine } = require('express-handlebars');

const secret = 'mysecretsecret';

const app = express();

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'jknfvkjbsdkvbdhvbsdhfzbh34q8t7'
}))



app.get('/', (req, res) => {
    res.render('demo/home')
})

app.get('/create/:password', (req, res) => {
    let payload = {
        password: req.params.password,
        id: uniqid()
    };

    let options = { expiresIn: '1d' };
    let token = jwt.sign(payload, secret, options);

    res.cookie('jwt', token);
    res.render('demo/demo', { message: "jtw created" });
});

app.get('/verify', (req, res) => {
    let token = req.cookies['jwt'];

    jwt.verify(token, secret, (err, payload) => {
        if (err) {
            return res.status(404).send(err);
        }

        //res.send(payload)
        res.render('demo/demo', { message: JSON.stringify(payload) });
    })

})

app.listen(5000, console.log.bind(console, 'App is running on http://localhost:5000 ...'));