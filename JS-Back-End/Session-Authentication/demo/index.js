const express = require('express');
const fs = require('fs/promises');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'jknfvkjbsdkvbdhvbsdhfzbh34q8t7'
}))

app.get('/', (req, res) => {
    res.cookie('myCokkie', '1stCookie');
    res.cookie('aGreatCokkie', 'halloWo4ld', { httpOnly: true });

    fs.readFile('./home.html', { encoding: 'utf-8' })
        .then(htmlRes => res.send(htmlRes))
});

app.get('/set-session/:name', (req, res) => {
    req.session.avatar = req.params.name;
    res.send('Hello, avatar set');
});

app.get('/get-session', (req, res) => {
    res.send(req.session.avatar);
});

app.get('/bcrypt/create/:pass', (req, res) => {
    let password = req.params.pass;
    let saltRounds = 8;

    bcrypt.hash(password, saltRounds).then(hash => res.send(hash));
    // Store hash in your password DB.
});

app.get('/bcrypt/:pass', (req, res) => {
    // Load hash from your password DB.
    let hashedPassword = '$2b$08$pslzeL6tj3Bsv9zEd4HpyuVmpas/Bl9iOBsKmS3XCq361Z5QToY2.';

    bcrypt.compare(req.params.pass, hashedPassword)
        .then(result => res.send(result));
})


app.listen(3000, console.log.bind(console, 'App is running on port 3000 ...'));