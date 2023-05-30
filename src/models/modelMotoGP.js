const mongoose = require("mongoose");


const riderMotoGP = mongoose.Schema({
    name: String,
    country: String,
    dateOfBirth: String,
    team: String,
    bike: String,
    height: Number,
    poles: Number,
    worldChampionships: Number,
    image: String,
    points: Number,
});



module.exports = mongoose.model('motoGP', riderMotoGP);