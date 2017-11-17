const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Language', languageSchema);
