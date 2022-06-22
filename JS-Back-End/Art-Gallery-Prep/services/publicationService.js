const Publication = require('../models/Publication.js');

exports.create = (publicationData) => Publication.create(publicationData);

exports.getAll = () => Publication.find();

exports.getOne = (publicationId) => Publication.findById(publicationId).populate('author');