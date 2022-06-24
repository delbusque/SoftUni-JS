const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authControler = require('./controllers/authController');
const housingController = require('./controllers/housingController');


router.use(homeController);
router.use('/auth', authControler);
router.use('/housing', housingController);

module.exports = router;

