const mongoose = require('mongoose');

// La méthode schema permet de créer un schema de données pour la bd mongodb
const pokemonSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: Object, required: true },
    type: { type: Array, required: true },
    base: { type: Object, required: true }
});

// Et la méthode modele transforme le schéma en modele utilisable
module.exports = mongoose.model('Pokemon', pokemonSchema);