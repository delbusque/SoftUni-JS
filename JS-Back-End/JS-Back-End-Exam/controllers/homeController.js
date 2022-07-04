const router = require('express').Router();
const cryptoService = require('../services/cryptoService.js');


router.get('/', async (req, res) => {

    const allCryptos = await cryptoService.getAll().lean();

    const cryptos = allCryptos.map(p => ({ ...p, buys: p.buyers.length }));

    res.render('home', { cryptos });
});


router.get('/search', async (req, res) => {

    let cryptos = await cryptoService.search(req.query.crypto, req.query.paymentMethod);

    res.render('home/search', { cryptos });
});

module.exports = router;
