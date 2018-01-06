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
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    graduation_date: Date,
    expected_graduation: String,
    languages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Language"
      }
    ],
    web_technologies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Language"
      }
    ],
    databases: [
      {
        type: Schema.Types.ObjectId,
        ref: "Language"
      }
    ],
    deployment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Language"
      }
    ],
    websites: [String],
    credit_hours: Number,
    free_response: {
      bg_interest: String,
      team_experience: String,
      project_experience: String,
      other_commitments: String,
      project_preference: String,
    },
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
