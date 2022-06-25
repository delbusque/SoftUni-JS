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
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /[A-Z][a-z]+\s[A-Z][a-z]+$/.test(v);
            },
            message: n => `Full Name is not in a valid format !`
        },
    },
    housings: [{
        type: mongoose.Types.ObjectId,
        ref: 'Housing'
    }],
    rented: [{
        type: mongoose.Types.ObjectId,
        ref: 'Housing'
    }],
});

userSchema.pre('save', function (next) {

    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;

            next();
        });

    // bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    //     if (err) {
    //         throw ('Can not hash password !')
    //     }
    //     this.password = hash;
    //     next();
    // })
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;