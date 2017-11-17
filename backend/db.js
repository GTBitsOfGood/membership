const mongoose = require('mongoose');

var mongoDB = `mongodb://${process.env.DATABASE_HOST || '127.0.0.1'}/${process.env.DATABASE_NAME || 'membership-portal'}`;
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;

require('./models/admin');
require('./models/applicant');
require('./models/language');
require('./models/project');

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;