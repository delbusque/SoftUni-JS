const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/env.js');

exports.create = (userData) => User.create(userData);

exports.login = async (email, password) => {

    const user = await User.findOne({ email });
    if (!user) {
        throw { message: 'Can not find email or password !' };
    }
    const isValid = user.validatePassword(password);

    if (!isValid) {
        throw { message: 'Can not find email or password !' };
    }

    return user;
};

exports.createToken = (user) => {

    const payload = { _id: user._id, email: user.email, username: user.username };
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