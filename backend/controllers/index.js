const express = require('express');
const router = express.Router();

const pokemonRoutes = require('./pokemons');
const masterRoutes = require('./masters');

router.get('/', async (req, res) => {
    res.status(200).json({
        nom : 'PokeCenter',
        version : '1.0',
        status : 200,
        message : 'Bienvenue sur cette API Pokemon !'
    });
});


router.use('/pokemons', pokemonRoutes);
router.use('/master', masterRoutes);

module.exports = router;