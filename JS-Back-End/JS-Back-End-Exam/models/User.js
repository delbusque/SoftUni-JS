const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/env.js')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [5, 'Username should be at least five characters !'],

    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'Password should be at least four characters !'],

    },
    email: {
        type: String,
        required: true,
        minlength: [10, 'Email should be at least ten characters !'],
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: n => `Email is not in a valid format !`
        },
    },
    cryptos: [{
        type: mongoose.Types.ObjectId,
        ref: 'Crypto'
    }],
    buys: [{
        type: mongoose.Types.ObjectId,
        ref: 'Crypto'
    }],
});

userSchema.pre('save', function (next) {

    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;

            next();
        });
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;