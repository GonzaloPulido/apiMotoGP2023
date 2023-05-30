const mongoose = require("mongoose");


const riderMoto3 = mongoose.Schema({
    name: String,
    country: String,
    dateOfBirth: String,
    team: String,
    bike: String,
    height: Number,
    poles: Number,
    worldChampionships: Number,
    image: String, 
    points: Number
});



module.exports = mongoose.model('moto3', riderMoto3);