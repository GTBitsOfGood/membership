const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema({
  name: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  contact: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    }
  },
  project_manager: {
    type: Schema.ObjectId,
    required: false
  },
  project_members: [{
    type: Schema.ObjectId,
    ref: 'Applicant'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
