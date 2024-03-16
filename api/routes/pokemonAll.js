const { Router } = require('express');
const controller = require('../controllers/pokemonAll.js');

const router = Router();

router.get('/:index', controller.index)

module.exports = router;
