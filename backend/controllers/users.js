const User = require('mongoose').model('User');

module.exports.index = (req, res, next) => {
  const { sort, limit, skip, ...query } = req.query;
  User.findApplicantsBy(query, { sort, limit, skip })
    .then(({ users, count }) => {
      res.locals.data = { users, count };
      return next();
    })
    .catch(err => {
      console.error(err);
      res.locals.errors = err;
      return next();
    });
};

module.exports.get = (req, res, next) => {
  User.getApplicantById(req.params.id)
    .then(user => {
      res.locals.data = { user };
      return next();
    })
    .catch(err => {
      res.locals.error = err;
      return next();
    });
};

module.exports.store = (req, res, next) => {
  const data = req.body;
  // prevent non-admins from setting these vals
  if (!req.user || req.user.role !== 'admin') {
    data.application_status = 'none';
    data.role = 'applicant';
    data.score = 0;
  }
  User.createNewApplicant(data)
    .then(user => {
      res.locals.data = { user };
      return next();
    })
    .catch(err => {
      res.locals.error = err;
      return next();
    });
};

module.exports.update = (req, res, next) => {
  const data = req.body;
  // prevent non-admins from setting these vals
  if (req.user.role !== 'admin') {
    if (data.application_status !== 'submitted') {
      data.application_status = 'submitted';
    }
    data.role = 'applicant';
  }
  User.updateApplicantById(req.params.id, data)
    .then(user => {
      res.locals.data = { user };
      return next();
    })
    .catch(err => {
      console.error(err);
      res.locals.error = err;
      return next();
    });
};

module.exports.delete = (req, res, next) => {
  User.deleteApplicantById(req.params.id)
    .then(() => {
      res.locals.data = { deleted: true };
      return next();
    })
    .catch(err => {
      res.locals.error = err;
      return next();
    });
};
