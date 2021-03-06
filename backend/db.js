const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {
  useMongoClient: true
});

// Get the default connection
const db = mongoose.connection;

require('./models/user');
require('./models/language');
require('./models/project');

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
