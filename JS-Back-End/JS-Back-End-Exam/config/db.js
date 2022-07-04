const mongoose = require('mongoose');
const { DB_QUERYSTRING } = require('./env');

exports.dbInit = () => {

    mongoose.connection.on('open', () => console.log('Db connected !'));

    return mongoose.connect(DB_QUERYSTRING);

}
