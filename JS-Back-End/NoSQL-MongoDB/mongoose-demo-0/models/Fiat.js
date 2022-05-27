const mongoose = require('mongoose');

const fiatSchema = new mongoose.Schema({
    model: String,
    year: Number
})

const Fiat = mongoose.model('Car', fiatSchema);

module.exports = Fiat;
