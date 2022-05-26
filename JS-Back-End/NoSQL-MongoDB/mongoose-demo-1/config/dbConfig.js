const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mongotest';

const dbInit = () => mongoose.connect(uri);

module.exports = dbInit;

