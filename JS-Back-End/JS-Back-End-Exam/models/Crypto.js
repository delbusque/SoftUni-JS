const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, 'Name should be at least two characters !'],

    },
    image: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'Image Url is invalid !']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price should be at least 0']
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description should be no more than 10 characters !'],

    },
    paymentMethod: {
        type: String,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        required: true
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;