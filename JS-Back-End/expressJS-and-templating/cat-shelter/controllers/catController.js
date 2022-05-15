const express = require('express');
const router = express.Router();
const fs = require('fs');
const dbService = require('../services/dbService.js')

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

router.get('/edit-cat/:catName', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        let catData = JSON.parse(data);
        let cat = catData.cats.find(c => c.name == req.params.catName);
        let breeds = catData.breeds;

        res.render('editCat', {
            cat,
            breeds
        })
    })
})

router.get('/shelter-cat/:catName', (req, res) => {
    dbService.getCat(req.params.catName, 'catShelter', res)
})

module.exports = router;