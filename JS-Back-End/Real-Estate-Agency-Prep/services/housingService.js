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

exports.search = (box) => Housing.find({ type: box }).lean();

//exports.search = (box) => Housing.find({ type: { $regex: box, $options: 'i' } }).lean();

