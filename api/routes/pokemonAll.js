const { Router } = require('express');
const controller = require('../controllers/pokemonAll.js');

const router = Router();

router.get('/', controller.index)

module.exports = router;