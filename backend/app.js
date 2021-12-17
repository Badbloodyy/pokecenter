// import d'express depuis le node module
const express = require('express');
const mongodb = require('./db/mongo');
const indexController = require('./controllers/index');

// créer l'application express
const app = express();

mongodb.initClientDbConnection();

// middleware qui permet de recupéré le contenu json d'une requêt si c'est envoyé en json (pour le post). Similair a body parcer
app.use(express.json({limit : '2mb'}));

// créer un header pour éviter le cross origin. Vu qu'il n'y a pas d'endpoint, elle sera appliqué à toute les routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// route get / endpoint. Obligation de mettre un statut a la réponse si endpoint.
app.get('/hello', (req, res, next) => {
    console.log("Hello World de Pokemon");
    res.status(200).json({ message: 'Hello world' })
    next();
});

app.use('/index', indexController);

/*

// Une appli express est une serie de fonction appelé middleware, chaque élément
// reçois des objets request et response, et peut les lire/analyser/manipuler.

app.use((req,res, next) => {
    console.log("requête reçue");
    // next() permet de passer au prochain middleware, sinon ça freeze
    next();
});

app.use((req,res, next) => {
    // la réponse aura un ceertain statut
   res.status(201);
   next();
});

app.use((req,res, next) => {
    res.json({ message: "Requête bien reçue "});
});

*/

module.exports = app;