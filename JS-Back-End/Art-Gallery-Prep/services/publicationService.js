const Publication = require('../models/Publication.js');

exports.create = (publicationData) => Publication.create(publicationData);

exports.getAll = () => Publication.find();

exports.getOne = (publicationId) => Publication.findById(publicationId);
exports.getOneDetailed = (publicationId) => Publication.findById(publicationId).populate('author');

exports.edit = (publicationId, updatedData) => Publication
    .findByIdAndUpdate(publicationId, updatedData, { runValidators: true });

exports.delete = (publicationId) => Publication.deleteOne({ _id: publicationId });