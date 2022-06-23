const mongoose = require('mongoose');
const router = require('express').Router();
const { isObjectIdOrHexString } = require('mongoose');
const { isAuth } = require('../middlewares/authMiddleware.js');
const publicationService = require('../services/publicationService.js');
const userService = require('../services/userService.js');
const { getErrorMessage } = require('../utils/errorHelpers.js')

router.get('/gallery', async (req, res) => {
    const publications = await publicationService.getAll().lean();

    res.render('publication/gallery', { publications });
});

router.get('/:publicationId/details', async (req, res) => {

    const publication = await publicationService.getOneDetailed(req.params.publicationId).lean();
    const isAuthor = publication.author._id == req.user?._id;


    const isShared = publication.usersShared.map(x => x.toHexString()).includes(req.user?._id);
    res.render('publication/details', { ...publication, isAuthor, isShared })
});

router.get('/create', isAuth, (req, res) => {
    res.render('publication/create');
});

router.post('/create', isAuth, async (req, res) => {
    const publicationData = { ...req.body, author: req.user._id };

    try {
        const publication = await publicationService.create(publicationData);
        await userService.addPublication(req.user._id, publication);

        res.redirect('/publications/gallery')

    } catch (error) {
        return res.render('publication/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:publicationId/edit', isAuth, async (req, res, next) => {
    const publication = await publicationService.getOne(req.params.publicationId).lean();

    if (publication.author != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    res.render('publication/edit', { ...publication });
});

router.post('/:publicationId/edit', isAuth, async (req, res, next) => {
    const publication = await publicationService.getOne(req.params.publicationId).lean();

    if (publication.author != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    try {
        const updatedData = { ...req.body };
        await publicationService.edit(req.params.publicationId, updatedData);

        res.redirect(`/publications/${req.params.publicationId}/details`)
    } catch (error) {
        res.render('publication/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:publicationId/delete', isAuth, async (req, res, next) => {
    const publication = await publicationService.getOne(req.params.publicationId).lean();

    if (publication.author != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    await publicationService.delete(req.params.publicationId);
    res.redirect('/publications/gallery');
});

router.get('/:publicationId/share', isAuth, async (req, res) => {
    const publication = await publicationService.getOne(req.params.publicationId);
    const user = await userService.getOne(req.user._id);

    publication.usersShared.push(req.user._id);
    user.shares.push(publication);

    await publication.save();
    await user.save();

    res.redirect('/');
})

module.exports = router;
