const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    github_id: {
      type: String,
      required: true
    },
    github_username: {
      type: String,
      required: true
    },
    github_access_token: {
      type: String,
      required: true
    },
    github_avatar_url: {
      type: String,
      required: true
    },
    github_profile_url: {
      type: String,
      required: true
    },
    github_public_repos: {
      type: Number,
      required: true
    },
    github_followers: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: false,
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
    languages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Language"
      }
    ],
    websites: [String],
    credit_hours: Number,
    free_response: Array,
    score: Number,
    role: {
      type: String,
      default: "applicant",
      enum: ["applicant", "admin"]
    },
    application_status: {
      type: String,
      default: "none",
      enum: ["none", "submitted", "rejected", "accepted"]
    }
  },
  { timestamps: true }
);

// export user model to app
module.exports = mongoose.model('User', userSchema);
