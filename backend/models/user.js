const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: String,
    title: String,
    email: String,
    phone: String,
    score: Number,
    credit_hours: Number,
    websites: [String],
    graduation_date: String,
    pm_interest: Boolean,
    em_interest: Boolean,
    github: {
      id: { type: String, required: true },
      username: { type: String, required: true },
      access_token: { type: String, required: true },
      avatar_url: { type: String, required: true },
      profile_url: { type: String, required: true },
      public_repos: { type: Number, required: true },
      followers: { type: Number, required: true }
    },
    languages: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    web_technologies: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    databases: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    deployment: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
    frontend_experience: {
      type: String,
      enum: [
        'Never worked with it',
        'A little experience',
        'Some experience',
        'A lot of experience',
        'Can teach it'
      ]
    },
    backend_experience: {
      type: String,
      enum: [
        'Never worked with it',
        'A little experience',
        'Some experience',
        'A lot of experience',
        'Can teach it'
      ]
    },
    free_response: {
      bg_interest: String,
      team_experience: String,
      project_experience: String,
      other_commitments: String,
      project_preference: String
    },
    role: {
      type: String,
      default: 'applicant',
      enum: ['applicant', 'admin']
    },
    application_status: {
      type: String,
      default: 'none',
      enum: ['none', 'submitted', 'rejected', 'accepted']
    }
  },
  { timestamps: true }
);

userSchema.statics.updateScore = user => {
  let score = 0;
  score += user.github.public_repos + user.github.followers;
  score += 14 - user.credit_hours;
  if (user.graduation_date) {
    const currYear = new Date().getFullYear();
    const gradYear = parseInt(user.graduation_date.split(' ')[1], 10);
    score += gradYear - currYear;
  }
  user.languages.forEach(curr => (score += curr.value));
  user.web_technologies.forEach(curr => (score += curr.value));
  user.databases.forEach(curr => (score += curr.value));
  user.deployment.forEach(curr => (score += curr.value));
  if (user.pm_interest) score += 1;
  if (user.em_interest) score += 1;
  user.score = score;
  return user.save();
};

userSchema.statics.findApplicantsBy = (query = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sort || '-updatedAt';
    const limit = parseInt(options.limit, 10) || 10;
    const skip = (parseInt(options.page, 10) - 1 || 0) * limit;

    Promise.all([
      mongoose
        .model('User')
        .find(query)
        .sort(sortBy)
        .limit(limit)
        .skip(skip)
        .populate('languages')
        .populate('databases')
        .populate('web_technologies')
        .populate('deployment')
        .exec(),
      mongoose
        .model('User')
        .count(query)
        .exec()
    ])
      .then(([users, count]) => resolve({ users, count }))
      .catch(reject);
  });
};

userSchema.statics.getApplicantById = id =>
  mongoose
    .model('User')
    .findById(id)
    .populate('languages')
    .populate('web_technologies')
    .populate('databases')
    .populate('deployment')
    .exec();

userSchema.statics.createNewApplicant = data =>
  mongoose.model('User').create({
    name: data.name,
    role: data.role,
    email: data.email,
    phone: data.phone,
    score: data.score,
    titile: data.title,
    github: data.github,
    websites: data.websites,
    languages: data.languages,
    databases: data.databases,
    deployment: data.deployment,
    pm_interest: data.pm_interest,
    em_interest: data.em_interest,
    credit_hours: data.credit_hours,
    free_responses: data.free_responses,
    graduation_date: data.graduation_date,
    web_technologies: data.web_technologies,
    backend_experience: data.backend_experience,
    application_status: data.application_status,
    frontend_experience: data.frontend_experience
  });

userSchema.statics.deleteApplicantById = id =>
  mongoose
    .model('User')
    .deleteOne({ _id: id })
    .exec();

userSchema.statics.updateApplicantById = (id, data) =>
  mongoose
    .model('User')
    .findById(id)
    .then(user => {
      user.name = data.name ? data.name : user.name;
      user.email = data.email ? data.email : user.email;
      user.phone = data.phone ? data.phone : user.phone;
      user.title = data.title ? data.title : user.title;
      user.role = data.role ? data.role : user.role;
      user.application_status = data.application_status
        ? data.application_status
        : user.application_status;
      user.pm_interest = data.pm_interest ? data.pm_interest : user.pm_interest;
      user.em_interest = data.em_interest ? data.em_interest : user.em_interest;
      user.credit_hours = data.credit_hours
        ? data.credit_hours
        : user.credit_hours;
      user.graduation_date = data.graduation_date
        ? data.graduation_date
        : user.graduation_date;
      user.role = data.role ? data.role : user.role;
      user.frontend_experience = data.frontend_experience
        ? data.frontend_experience
        : user.frontend_experience;
      user.backend_experience = data.backend_experience
        ? data.backend_experience
        : user.backend_experience;
      user.free_response = data.free_response
        ? data.free_response
        : user.free_response;
      user.websites = data.websites ? data.websites : user.websites;
      user.languages = data.languages ? data.languages : user.languages;
      user.web_technologies = data.web_technologies
        ? data.web_technologies
        : user.web_technologies;
      user.databases = data.databases ? data.databases : user.databases;
      user.deployment = data.deployment ? data.deployment : user.deployment;
      user.github = data.github ? data.github : user.github;
      return user.save();
    })
    .then(user => {
      return mongoose
        .model('User')
        .findById(user._id)
        .populate('languages')
        .populate('databases')
        .populate('web_technologies')
        .populate('deployment')
        .exec();
    })
    .then(user => {
      return mongoose.model('User').updateScore(user);
    });

// export user model to app
module.exports = mongoose.model('User', userSchema);
