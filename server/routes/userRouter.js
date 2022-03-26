const Router = require('express');
const router = new Router();

const {
  login,
  registration,
  check,
} = require('../controllers/userControllers');

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', check);

module.exports = router;
