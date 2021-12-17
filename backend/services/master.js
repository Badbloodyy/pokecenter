const { response } = require('express');
const Master = require('../models/Master');


exports.createMasters = (req, res, next) => {
    delete req.body._id;
    const master = new Master({
        ...req.body
    });
    console.log(req.body);

    master.save()
        .then(() => res.status(201).json({ message: "Entraineur bien enregistré" }))
        .catch(error => res.status(400).json({ error }));
};

exports.getMasters = (req, res, next) => {
    Master.find()
    .then((masters) => res.status(200).json({masters}))
    .catch(error => res.status(400).json({ error }));
};

// marche pas
exports.addPokemonsToMaster = (req, res, next) => {
    Master.findByIdAndUpdate({id : req.params.id}, ...req.body, {runValidators: true})
    .then(() => res.status(201).json({ message: "Entraineur bien mis à jour "}))
    .catch(error => res.status(400).json(error));
};

exports.getPokemonFromMaster = (req, res, next) => {
    Master.findOne({id : req.params.id}, 'pokemons')
    .then((master) => res.status(200).json({master}))
    .catch(error => res.status(400).json({ error }));
}


