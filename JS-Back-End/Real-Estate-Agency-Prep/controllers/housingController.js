const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware.js');

const housingService = require('../services/housingService.js');
const userService = require('../services/userService.js');

const { getErrorMessage } = require('../utils/errorHelpers.js')

router.get('/catalog', async (req, res) => {
    const housings = await housingService.getAll().lean();

    res.render('housing/catalog', { housings });
});

router.get('/:housingId/details', async (req, res) => {

    const housing = await housingService.getOneDetailed(req.params.housingId).lean();
    const isOwner = housing.owner._id == req.user?._id;

    const isAvailable = housing.availablePieces > 0;
    const isRented = housing.rentedHome.map(x => x.toHexString()).includes(req.user?._id);

    const house = await housingService.getOne(req.params.housingId).populate('rentedHome').lean();

    const housingTenants = house.rentedHome.map(x => x.name).join(', ');

    res.render('housing/details', { ...housing, isOwner, isRented, isAvailable, housingTenants })
});

router.get('/create', isAuth, (req, res) => {
    res.render('housing/create');
});

router.get('/search', isAuth, (req, res) => {
    res.render('housing/create');
});

router.post('/create', isAuth, async (req, res) => {
    const housingData = { ...req.body, owner: req.user._id };

    try {
        const housing = await housingService.create(housingData);
        await userService.addHousing(req.user._id, housing);

        res.redirect('/housing/catalog')

    } catch (error) {
        return res.render('housing/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:housingId/edit', isAuth, async (req, res, next) => {
    const housing = await housingService.getOne(req.params.housingId).lean();

    if (housing.owner != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    res.render('housing/edit', { ...housing });
});

router.post('/:housingId/edit', isAuth, async (req, res, next) => {
    const housing = await housingService.getOne(req.params.housingId).lean();

    if (housing.owner != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    try {
        const updatedData = { ...req.body };
        await housingService.edit(req.params.housingId, updatedData);

        res.redirect(`/housing/${req.params.housingId}/details`)
    } catch (error) {
        res.render('housing/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:housingId/delete', isAuth, async (req, res, next) => {
    const housing = await housingService.getOne(req.params.housingId).lean();

    if (housing.owner != req.user._id) {
        return next({ status: 401, message: 'You are not allowed to view this page !' })
    }

    await housingService.delete(req.params.housingId, req.user._id);
    res.redirect('/housing/catalog');
});

router.get('/:housingId/rent', isAuth, async (req, res) => {
    const housing = await housingService.getOne(req.params.housingId);
    const user = await userService.getOne(req.user._id);

    housing.availablePieces -= 1;
    housing.rentedHome.push(req.user._id);
    user.rented.push(housing);

    await housing.save();
    await user.save();

    res.redirect(`/housing/${req.params.housingId}/details`);
})

module.exports = router;
