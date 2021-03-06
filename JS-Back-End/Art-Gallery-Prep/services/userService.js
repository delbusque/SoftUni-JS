const User = require('../models/User.js');

exports.getOne = (userId) => User.findById(userId);

exports.addPublication = async (userId, publicationId) => {
    const user = await User.findById(userId);

    user.publications.push(publicationId);

    return await user.save();
}