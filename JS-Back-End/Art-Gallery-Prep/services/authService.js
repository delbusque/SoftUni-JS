const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env.js');

exports.create = (userData) => User.create(userData);

exports.login = async (username, password) => {

    const user = await User.findOne({ username });

    if (!user) {
        throw { message: 'Can not find username or password !' };
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
        throw { message: 'Can not find username or password !' };
    }

    return user;
};

exports.createToken = (user) => {

    const payload = { _id: user._id, username: user.username, address: user.address };
    const options = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, options, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }

            resolve(decodedToken);
        })
    });

    return tokenPromise;
};