const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: String,
    firstname: String,
    surname: String,
    email: String,
    age: Number,
    password: String,
});



module.exports = mongoose.model('user', userSchema);