const mongoose = require('mongoose');

const housingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [6, 'Name should be at least six characters !'],

    },
    type: {
        type: String,
        enum: ['Apartment', 'Villa', 'House'],
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: [1850, 'Year should be at least 1850'],
        max: [2021, 'Year should not be above 2021'],

    },
    city: {
        type: String,
        required: true,
        minlength: [4, 'Name should be at least four characters !'],

    },
    homeImage: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Image Url is invalid !']
    },
    propertyDescription: {
        type: String,
        required: true,
        maxlength: [60, 'Description should be no more than 60 characters !'],

    },
    availablePieces: {
        type: Number,
        required: true,
        min: [0, 'Available Pieces should be at least 0'],
        max: [10, 'Available Pieces should be no more than 10'],
    },
    rentedHome: [{  //buyers
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Housing = mongoose.model('Housing', housingSchema);

module.exports = Housing;