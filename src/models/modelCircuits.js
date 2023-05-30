const mongoose = require("mongoose");

const circuitSchema = mongoose.Schema({
    circuit: String,
    country: String,
    start: String,
    finish: String,
    length: Number,
    leftCorners: Number,
    rightCorners: Number,
    image: String,
    backImage: String,
    favBool: Boolean,
});



module.exports = mongoose.model('circuit', circuitSchema);