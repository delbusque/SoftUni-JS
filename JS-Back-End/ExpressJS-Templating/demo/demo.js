const express = require('express');
const path = require('path')
const fs = require('fs');
const { engine } = require('express-handlebars');


const catsController = require('./controllers/catsController.js');
const demoMiddleware = require('./middlewares/demoMiddleware.js')

const app = express();
const port = 5000;

app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/add-cat/:catName?', demoMiddleware, (req, res) => {
    let breeds = [
        { name: 'Persian' },
        { name: 'Angor' }
    ]

    let countries = ['Argentina', 'Mexico', 'Poland']

    res.render('addCat', {
        name: req.params.catName || 'Cat name ...',
        breeds,
        countries,
        title: '<p>Modi Add Cat</p>'
    });
});


//app.use('/kino', express.static('public'))
app.use(express.static('public'));

//app.use(demoMiddleware);
app.use('/cat', catsController)

app.get('/kitty', (req, res) => {
    res.sendFile('./public/images/kitty.jpeg', {
        root: __dirname
    });
})

app.get('/', (req, res) => {
    res.render('home');
})

//app.get('/', (req, res) => {
//    // let absolutePath = path.join(__dirname, '/views/home/index.html')
//    // res.sendFile(absolutePath);
//
//    res.sendFile(path.resolve('views/home/index.html'));
//})

app.get('/fs', (req, res) => {
    fs.readFile('./views/home/index.html', (err, result) => {
        res.end(result)
    })
})

app.get('/fs*', (req, res) => {
    res.write('<h1>Home Page</h1>');
    res.end()
})

app.get(/.*cat$/i, (req, res) => {
    res.write('<h1>Cat detected ...</h1>');
    res.end()
})

app.get('/down', (req, res) => {
    // res.header({
    //     'Content-Disposition': 'attachment; filename="cute-cat.jpeg"'
    // })
    // let imageStream = fs.createReadStream('./public/images/kitty.jpeg');
    // imageStream.pipe(res);

    res.download('./public/images/kitty.jpeg', 'jam.jpg', )

    //res.json({ "name": "Navcho", "age": 3 })

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})