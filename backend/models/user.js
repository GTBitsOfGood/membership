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
  // password: {
  //   type: String,
  //   required: true
  // },
  // first_name: {
  //   type: String,
  //   required: true
  // },
  // last_name: {
  //   type: String,
  //   required: true
  // },
  // role: {
  //   type: String,
  //   default: 'pending',
  //   enum: ['pending', 'admin', 'manager', 'volunteer']
  // },
  // street_address: {
  //   type: String,
  //   required: true
  // },
  // city: {
  //   type: String,
  //   required: true
  // },
  // state: {
  //   type: String,
  //   required: true
  // },
  // zip_code: {
  //   type: String,
  //   required: true
  // },
  // phone_number: {
  //   type: String,
  //   required: true
  // },
  // date_of_birth: {
  //   type: Date,
  //   required: true
  // },
  // events: {
  //   type: Array, // array of event objects
  //   default: []
  // },
  // survey_responses: {
  //   type: Array, // array of Survey Objects
  //   default: []
  // }
}, { timestamps: true });

// export user model to app
module.exports = mongoose.model('User', userSchema);
