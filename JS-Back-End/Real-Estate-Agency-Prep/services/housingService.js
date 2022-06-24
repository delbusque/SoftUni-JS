const Housing = require('../models/Housing.js');

exports.create = (housingData) => Housing.create(housingData);

exports.getAll = () => Housing.find();

exports.getOne = (housingId) => Housing.findById(housingId);
exports.getOneDetailed = (housingId) => Housing.findById(housingId).populate('owner');

exports.edit = (housingId, updatedData) => Housing
    .findByIdAndUpdate(housingId, updatedData, { runValidators: true });

exports.delete = (housingId) => Housing.deleteOne({ _id: housingId });

exports.update = (housingId, updatedData) => {
    Housing.findByIdAndUpdate(housingId, updatedData, { runValidators: true })
};

exports.search = (searching) => Housing.find({ type: { $regex: searching, $options: 'i' } }).lean();

