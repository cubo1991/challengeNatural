const express = require('express');
const pokemonAll = require('./pokemonAll');
const pokemonQuery = require('./pokemonQuery');
const pokemonDetail = require('./pokemonDetail');

// Crear una nueva instancia de Router
const router = express.Router();

//Traemos todas las rutas que vamos a usar
router.use('/pokemonAll', pokemonAll);
router.use('/pokemonQuery', pokemonQuery)
router.use('/pokemonDetail', pokemonDetail)

module.exports = router;
