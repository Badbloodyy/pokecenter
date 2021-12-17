const express = require('express');
const router = express.Router();

// Import du service qui sera ensuite utilisé pour appeller les middlewares
const service = require('../services/pokemon');

router.get('/', service.getPokemons);
router.get('/:id', service.getOnePokemon);
router.post('/add', service.createPokemon);
router.post('/addmany', service.createManyPokemon)
router.put('/:id', service.modifyPokemon);
router.delete('/:id', service.deletePokemon);

module.exports = router;
