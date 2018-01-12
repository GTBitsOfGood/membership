const mongoose = require('mongoose');

module.exports.findApplicantsBy = (query, options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sort || '-updatedAt';
    const limit = parseInt(options.limit, 10) || 10;
    const skip = (parseInt(options.skip, 10) || 0) * limit;

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
