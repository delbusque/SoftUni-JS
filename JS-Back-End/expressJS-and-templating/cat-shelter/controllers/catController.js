const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/add-breed', (req, res) => {
    res.render('addBreed')

});

router.get('/add-cat', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        let catData = JSON.parse(data);

        res.render('addCat', {
            catData
        })
    })

})

module.exports = router;