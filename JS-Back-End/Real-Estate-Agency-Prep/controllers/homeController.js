const router = require('express').Router();
const housingService = require('../services/housingService.js');


router.get('/', async (req, res) => {

    const homes = await housingService.getAll().lean();

    const housings = homes.map(p => ({ ...p, rented: p.rentedHome.length }));
    res.render('home', { housings })
});


router.get('/search', async (req, res) => {

    let housings = await housingService.search(req.query.box);

    res.render('home/search', { housings });
});

module.exports = router;
