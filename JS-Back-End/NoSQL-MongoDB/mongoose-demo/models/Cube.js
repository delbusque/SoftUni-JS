const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    difficulty: Number
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;