const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware.js');

const cryptoService = require('../services/cryptoService.js');
const userService = require('../services/userService.js');

const { getErrorMessage } = require('../utils/errorHelpers.js')

router.get('/catalog', async (req, res) => {
    const cryptos = await cryptoService.getAll().lean();

    res.render('crypto/catalog', { cryptos });
});

router.get('/:cryptoId/details', async (req, res) => {

    const crypto = await cryptoService.getOneDetailed(req.params.cryptoId).lean();
    const isOwner = crypto.owner._id == req.user?._id;

    const isBuyed = crypto.buyers.map(x => x.toHexString()).includes(req.user?._id);

    const cryptoTemp = await cryptoService.getOne(req.params.cryptoId).populate('buyers').lean();

    const cryptoBuyers = cryptoTemp.buyers.map(x => x.username).join(', ');

    res.render('crypto/details', { ...crypto, isOwner, isBuyed, cryptoBuyers })
});

router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});


router.post('/create', isAuth, async (req, res) => {
    const cryptoData = { ...req.body, owner: req.user._id };

    try {
        const crypto = await cryptoService.create(cryptoData);
        await userService.addCrypto(req.user._id, crypto);

        res.redirect('/crypto/catalog')

    } catch (error) {
        return res.render('crypto/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:cryptoId/edit', isAuth, async (req, res, next) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();

    if (crypto.owner != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    res.render('crypto/edit', { ...crypto });
});

router.post('/:cryptoId/edit', isAuth, async (req, res, next) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();

    if (crypto.owner != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    try {
        await cryptoService.edit(req.params.cryptoId, req.body);

        res.redirect(`/crypto/${req.params.cryptoId}/details`)
    } catch (error) {
        res.render('crypto/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:cryptoId/delete', isAuth, async (req, res, next) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId).lean();

    if (crypto.owner != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    await cryptoService.delete(req.params.cryptoId, req.user._id);
    res.redirect('/crypto/catalog');
});

router.get('/:cryptoId/buy', isAuth, async (req, res) => {
    const crypto = await cryptoService.getOne(req.params.cryptoId);
    const user = await userService.getOne(req.user._id);

    crypto.buyers.push(req.user._id);
    user.buys.push(crypto);

    await crypto.save();
    await user.save();

    res.redirect(`/crypto/${req.params.cryptoId}/details`);
})

module.exports = router;
