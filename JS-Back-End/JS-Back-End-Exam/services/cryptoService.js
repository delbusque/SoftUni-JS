const Crypto = require('../models/Crypto.js');

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.getAll = () => Crypto.find();

exports.getOne = (cryptoId) => Crypto.findById(cryptoId);
exports.getOneDetailed = (cryptoId) => Crypto.findById(cryptoId).populate('owner');

exports.edit = (cryptoId, updatedData) => Crypto
    .findByIdAndUpdate(cryptoId, updatedData, { runValidators: true });

exports.delete = (cryptoId) => Crypto.deleteOne({ _id: cryptoId });

exports.update = (cryptoId, updatedData) => {
    Crypto.findByIdAndUpdate(cryptoId, updatedData, { runValidators: true })
};

exports.search = (crypto, method) => Crypto.find({ name: { $regex: `${crypto}`, $options: 'i' }, paymentMethod: method }).lean();