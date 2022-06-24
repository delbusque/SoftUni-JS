const User = require('../models/User.js');

exports.getOne = (userId) => User.findById(userId);

exports.addHousing = async (userId, housingId) => {
    const user = await User.findById(userId);

    user.housings.push(housingId);

    return await user.save();
}