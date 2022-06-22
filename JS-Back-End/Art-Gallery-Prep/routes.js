const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authControler = require('./controllers/authController');
const publicationController = require('./controllers/publicationController');

router.use(homeController);
router.use('/auth', authControler);
router.use('/publications', publicationController);

module.exports = router;