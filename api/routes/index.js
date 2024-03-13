const express = require('express');
const test = require('./test');
const pokemonAll = require('./pokemonAll');
const pokemonQuery = require('./pokemonQuery');
const pokemonDetail = require('./pokemonDetail');
// Crear una nueva instancia de Router
const router = express.Router();

router.use('/test', test);
router.use('/pokemonAll', pokemonAll);
router.use('/pokemonQuery', pokemonQuery)
router.use('/pokemonDetail', pokemonDetail)

module.exports = router;
