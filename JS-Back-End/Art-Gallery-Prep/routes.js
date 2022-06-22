const router = require('express').Router();
const homeController = require('./controllers/homeController');
const authControler = require('./controllers/authController');

router.use(homeController);
router.use('/auth', authControler);

module.exports = router;