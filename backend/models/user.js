const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: String,
    title: String,
    email: String,
    score: Number,
    credit_hours: Number,
    websites: [String],
    graduation_date: String,
    github: {
      id: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      access_token: {
        type: String,
        required: true
      },
      avatar_url: {
        type: String,
        required: true
      },
      profile_url: {
        type: String,
        required: true
      },
      public_repos: {
        type: Number,
        required: true
      },
      followers: {
        type: Number,
        required: true
      },
    },
    languages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Language"
      }
    ],
    free_response: {
      bg_interest: String,
      team_experience: String,
      project_experience: String,
      other_commitments: String,
      project_preference: String,
    },
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
