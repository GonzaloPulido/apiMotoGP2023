const mongoose = require("mongoose");

const teamsSchema = mongoose.Schema({
    name: String,
    piloto1: String,
    piloto2: String,
    image: String
});



module.exports = mongoose.model('teamMotoGP', teamsSchema);