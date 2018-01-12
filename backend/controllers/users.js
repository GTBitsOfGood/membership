const User = require('mongoose').model('User');
const util = require('../services/util');

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
  User.findById(req.params.id, async (err, user) => {
    if (err) {
      console.error(err);
      res.locals.error = err;
      return next();
    }

    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email ? req.body.email : user.email;
    user.phone = req.body.phone ? req.body.phone : user.phone;
    user.title = req.body.title ? req.body.title : user.title;
    user.pm_interest = req.body.pm_interest
      ? req.body.pm_interest
      : user.pm_interest;
    user.em_interest = req.body.em_interest
      ? req.body.em_interest
      : user.em_interest;
    user.credit_hours = req.body.credit_hours
      ? req.body.credit_hours
      : user.credit_hours;
    user.graduation_date = req.body.graduation_date
      ? req.body.graduation_date
      : user.graduation_date;
    user.role = req.body.role ? req.body.role : user.role;
    user.frontend_experience = req.body.frontend_experience
      ? req.body.frontend_experience
      : user.frontend_experience;
    user.backend_experience = req.body.backend_experience
      ? req.body.backend_experience
      : user.backend_experience;
    user.free_response = req.body.free_response
      ? req.body.free_response
      : user.free_response;
    user.websites = req.body.websites ? req.body.websites : user.websites;
    user.languages = req.body.languages
      ? await util.strsToLangs(req.body.languages, 'languages')
      : user.languages;
    user.web_technologies = req.body.web_technologies
      ? await util.strsToLangs(req.body.web_technologies, 'web_technologies')
      : user.web_technologies;
    user.databases = req.body.databases
      ? await util.strsToLangs(req.body.databases, 'databases')
      : user.databases;
    user.deployment = req.body.deployment
      ? await util.strsToLangs(req.body.deployment, 'deployment')
      : user.deployment;
    user.github = req.body.github ? req.body.github : user.github;

    // protect application_status changes
    if (
      req.body.application_status &&
      (req.body.application_status === 'submitted' || req.user.role === 'admin')
    ) {
      user.application_status = req.body.application_status
        ? req.body.application_status
        : user.application_status;
    }

    // protect role changes
    if (req.body.role && req.user.role === 'admin') {
      user.role = req.body.role ? req.body.role : user.role;
    }

    user.score = util.generateScore(user);

    user.save((err, updated) => {
      if (err) {
        console.error(err);
        res.locals.error = err;
        return next();
      }

      res.locals.data = {
        user: updated
      };
      return next();
    });
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
