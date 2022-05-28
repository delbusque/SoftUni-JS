const mongoose = require('mongoose');

const petShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15
    },
    species: {
        type: String,
        enum: {
            values: ['Dog', 'Cat', 'Bunny'],
            message: '{VALUE} is not supported pet !'
        },
        required: true
    }
})

const Pet = mongoose.model('Pet', petShema);

module.exports = Pet;