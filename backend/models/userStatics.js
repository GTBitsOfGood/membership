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

module.exports.findByApplicationStatus = (status, options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sortBy || '-updatedAt';
    const limit = options.limit || 10;
    const skip = (options.skip || 0) * limit;
    const query = {
      role: 'applicant',
      application_status: status
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

module.exports.findInterestedPMs = (options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sortBy || '-updatedAt';
    const limit = options.limit || 10;
    const skip = (options.skip || 0) * limit;
    const query = {
      role: 'applicant',
      pm_interest: true
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

module.exports.findInterestedEMs = (options = {}) => {
  return new Promise((resolve, reject) => {
    const sortBy = options.sortBy || '-updatedAt';
    const limit = options.limit || 10;
    const skip = (options.skip || 0) * limit;
    const query = {
      role: 'applicant',
      em_interest: true
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
