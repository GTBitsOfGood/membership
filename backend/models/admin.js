const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profile_picture: String
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
