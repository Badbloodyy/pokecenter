// Pareil que pour le controleur pokemon

const express = require('express');
const router = express.Router();

const service = require('../services/master');

router.post('/', service.createMasters);
router.get('/', service.getMasters);
router.get('/:id/pokemons', service.getPokemonFromMaster);
router.post('/:id/pokemons', service.addPokemonsToMaster); // put ?


module.exports = router;