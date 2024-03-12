const { Router } = require('express');
const controller = require('../controllers/test.js');

const router = Router();

router.get('/', controller.index)

module.exports = router;