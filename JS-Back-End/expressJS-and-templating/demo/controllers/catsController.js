const express = require('express');
const router = express.Router();
const catsMiddleware = require('../middlewares/catsMiddleware.js')

router.get('/add-breed', (req, res) => {
    res.render('addBreed')
})

router.get('/mucky', catsMiddleware, (req, res) => {
    res.header({
        'Content-Type': 'text/html'
    })
    res.write('<h2>Mucky`s World ...</h2>');
    res.end()
})

router.get('/:catName', catsMiddleware, (req, res) => {
    if (req.params.catName == "Muck") {
        res.redirect('/cats/littleMucki');
        return;
    }

    res.end(`
    <h1>Cat Private</h1>
    <h3>${req.params.catName}'s home distr
    `)
})

module.exports = router;