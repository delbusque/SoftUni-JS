const express = require('express');
const router = express.Router();
const fs = require('fs');
const formidable = require('formidable');
const dbService = require('../services/dbService.js');
const db = require('../db.json');


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

router.post('/add-cat', (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {

        dbService.addCat(fields)
            .then(() => {
                res.writeHead(302, {
                    'Location': '/'
                })
                res.end()
            });
    })
})

router.post('/add-breed', (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {

        if (!db.breeds.find(b => b == fields.breed)) {
            dbService.addBreed(fields)
                .then(() => {
                    res.writeHead(302, {
                        'Location': '/'
                    })
                    res.end();
                });
        } else {
            res.writeHead(302, {
                'Location': '/'
            })
            res.end();
        }


    })
})

router.get('/shelter-cat/:catName', (req, res) => {
    dbService.getCat(req.params.catName, 'catShelter', res)
})

module.exports = router;