const mongoose = require('mongoose');

module.exports.findAllApplicants = (status, options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sortBy || '-updatedAt';
    const limit = options.limit || 10;
    const skip = (options.skip || 0) * limit;
    Promise.all([
      mongoose
        .model('User')
        .find({ role: 'applicant' })
        .where('application_status')
        .in(['submitted', 'rejected', 'accepted'])
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
        .count({ role: 'applicant' })
        .where('application_status')
        .in(['submitted', 'rejected', 'accepted'])
        .exec()
    ])
      .then(([users, count]) => resolve({ users, count }))
      .catch(reject);
  });
};

module.exports.findApplicantsBy = (inputQuery, options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sortBy || '-updatedAt';
    const limit = options.limit || 10;
    const skip = (options.skip || 0) * limit;
    const query = {
      ...inputQuery,
      role: 'applicant'
    };

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

module.exports.getApplicantById = id =>
  mongoose
    .model('User')
    .findById(id)
    .populate('languages')
    .populate('web_technologies')
    .populate('databases')
    .populate('deployment')
    .exec();

module.exports.createNewApplicant = data =>
  mongoose
    .model('User')
    .create({
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
    })
    .exec();

module.exports.updateApplicantById = (id, data) =>
  mongoose
    .model('User')
    .update(
      { _id: id },
      {
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
      }
    )
    .exec();

module.exports.deleteApplicantById = id =>
  mongoose
    .model('User')
    .deleteOne({ _id: id })
    .exec();
