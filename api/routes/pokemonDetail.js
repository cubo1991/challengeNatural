const { Router } = require('express');
const controller = require('../controllers/pokemonDetail.js');

const router = Router();

router.get('/:id', controller.index)

module.exports = router;