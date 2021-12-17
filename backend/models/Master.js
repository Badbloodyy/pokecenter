const mongoose = require('mongoose');
const Pokemon = require('./Pokemon');

const masterSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    pokemons: {
        type: [{
            type: Object
        }],
        validate: [arrayLimit, '{PATH} pokemons? Il en faut 6!']
    }
});

function arrayLimit(val) {
    return val.length == 6;
}


module.exports = mongoose.model('Master', masterSchema);