const User = require('../models/User.js');

exports.getOne = (userId) => User.findById(userId);

exports.addCrypto = async (userId, cryptoId) => {
    const user = await User.findById(userId);

    user.cryptos.push(cryptoId);

    return await user.save();
}