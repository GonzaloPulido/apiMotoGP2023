const mongoose = require("mongoose");

const teamsSchema = mongoose.Schema({
    name: String,
    piloto1: String,
    piloto2: String,
    piloto1Id: String,
    piloto2Id: String,
    image: String
});



module.exports = mongoose.model('teamMoto3', teamsSchema);