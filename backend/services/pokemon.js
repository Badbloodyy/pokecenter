const { response } = require('express');
const Pokemon = require('../models/Pokemon');


exports.getPokemons = (req, res, next) => {
    Pokemon.find()
        .then(pokemons => res.status(200).json(pokemons))
        .catch(error => res.status(400).json(error));
};

exports.getOnePokemon = (req, res, next) => {
    Pokemon.findOne({ id: req.params.id })
        .then(pokemon => res.status(200).json(pokemon))
        .catch(error => res.status(400).json(error))
};

exports.createPokemon = (req, res, next) => {
    // retirer le champs id mongodb avant de le traiter
    delete req.body._id;
    console.log(req.body);
    const pokemon = new Pokemon({
        // ... est un raccourci js, l'opérateur spread, pour copier les champs de la body de la request au schéma pokemon
        ...req.body
    });
    // enregistre dans la bdd, elle renvoie une promise. Execute un .validate automatique, donc opération annulée s'il manque
    // un champ quelque part
    pokemon.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.createManyPokemon = (req, res, next) => {
    pokemonArr = [];

    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) { 
            delete req.body[key]._id;
            let item = req.body[key];
            pokemonArr.push(item);
        }
    }

    // Possible de mettre just req.body en premier parametre ici, le resultat est le même au final. Je laisse pour l'ex
    Pokemon.insertMany(pokemonArr, { ordered: true })
        .then(() => res.status(201).json({ message: 'Tableau enregistré' }))
        .catch(error => res.status(400).json({ error }));


}

exports.modifyPokemon = (req, res, next) => {
   Pokemon.updateOne({ id: req.params.id }, { ...req.body, id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié'}))
        .catch(error => res.status(400).json({ error }));
    
};

exports.deletePokemon = (req, res, next) => {
    Pokemon.deleteOne({ id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé' }))
        .catch(error => res.status(400).json({ error }));
};