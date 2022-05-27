const mongoose = require('mongoose');

const dbConfig = () => mongoose.connect('mongodb://localhost:27017/test')

module.exports = dbConfig;