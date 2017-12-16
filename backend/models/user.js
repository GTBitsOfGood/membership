const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
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
    required: false
  },
  email: {
    type: String,
    required: true
  },
  graduation_date: Date,
  languages: [{
    type: Schema.Types.ObjectId,
    ref: 'Language'
  }],
  websites: [ String ],
  credit_hours: Number,
  free_response: Array,
  score: Number,
  role: {
    type: String,
    default: 'applicant',
    enum: ['applicant', 'admin']
  }
}, { timestamps: true });

// export user model to app
module.exports = mongoose.model('User', userSchema);
