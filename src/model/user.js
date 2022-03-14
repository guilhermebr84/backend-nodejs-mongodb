const mongoose = require('mongoose')

//creating a model

const DataSchema = new mongoose.Schema({
    name: String,
    password: String
})

const user = mongoose.model('user', DataSchema);
module.exports = user;