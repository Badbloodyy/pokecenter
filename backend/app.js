// import d'exprss depuis le node module
const express = require('express');

// créer l'application express
const app = express();

// middleware qui permet de recupéré le contenu json d'une requêt si c'est envoyé en json (pour le post). Similair a body parcer
app.use(express.json());

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

app.post('/hello', (req,res,next) => {
    // .body contient le json venant de la requête
    console.log(req.body());
    res.status(201).json({
        message : 'Message envoyé'
    });
});



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