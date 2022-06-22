const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const publicationService = require('../services/publicationService.js');

router.get('/gallery', async (req, res) => {
    const publications = await publicationService.getAll().lean();

    res.render('publication/gallery', { publications });
});

router.get('/:publicationId/details', async (req, res) => {

    const publication = await publicationService.getOne(req.params.publicationId).lean();
    const isAuthor = publication.author._id == req.user?._id;

    res.render('publication/details', { ...publication, isAuthor })
})

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

router.post('/create', isAuth, async (req, res) => {
    const publicationData = { ...req.body, author: req.user._id };
    await publicationService.create(publicationData);

    res.redirect('/publications/gallery')
})

module.exports = router;
