const { Router } = require('express');
const controller = require('../controllers/pokemonQuery.js');

const router = Router();

router.get('/', controller.index)

module.exports = router;