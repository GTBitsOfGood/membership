const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema(
  {
    description: {
      type: String,
      required: true
    },
    organization: {
      type: String,
      required: true
    },
    photo_url: {
      type: String,
      required: true
    },
    website_url: {
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
        type: String,
        required: true
      }
    },
    project_manager: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    project_members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
