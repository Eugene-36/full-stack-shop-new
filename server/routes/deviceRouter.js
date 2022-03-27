const Router = require('express');
const router = new Router();
const { create, getAll } = require('../controllers/deviceController');

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getAll);

module.exports = router;
