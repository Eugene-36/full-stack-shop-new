const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
  login,
  registration,
  check,
} = require('../controllers/userControllers');

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', authMiddleware, check);

module.exports = router;
