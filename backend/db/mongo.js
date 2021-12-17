const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
};

exports.initClientDbConnection = async () => {
    try {
        await mongoose.connect('mongodb://root:root@localhost:27017/CombatPokemon?authSource=admin', clientOptions)
        console.log("Connexion à MangoDB réussie");
    } catch (error) {
        console.log(error);
        throw error;
    }
}


