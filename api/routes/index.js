const express = require('express');
const test = require('./test');
const pokemonAll = require('./pokemonAll');

// Crear una nueva instancia de Router
const router = express.Router();

router.use('/test', test);
router.use('/pokemonAll', pokemonAll);

module.exports = router;
