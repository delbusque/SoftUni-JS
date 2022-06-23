const router = require('express').Router();
const publicationService = require('../services/publicationService.js');
const userService = require('../services/userService.js');


router.get('/', async (req, res) => {
    const pubs = await publicationService.getAll().lean();

    const publications = pubs.map(p => ({ ...p, shares: p.usersShared.length }));
    res.render('home', { publications })
});

router.get('/profile', async (req, res) => {

    const user = await userService.getOne(req.user._id).populate('publications').populate('shares').lean();
    const publicationTitles = user.publications.map(x => x.title).join(', ');
    const shareTitles = user.shares.map(x => x.title).join(', ');

    res.render('home/profile', { ...user, publicationTitles, shareTitles });
});

module.exports = router;