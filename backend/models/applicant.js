const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  graduation_date: {
    type: Date,
    required: true
  },
  languages: [{
    type: Schema.ObjectId,
    ref: 'Language'
  }],
  websites: [ String ],
  credit_hours: {
    type: Number,
    required: true
  },
  free_response: {
    type: Array,
    required: true
  },
  score: {
    type: Number,
    required: false
  }
}, { timestamps: true });

// export user model to app
module.exports = mongoose.model('Applicant', applicantSchema);
