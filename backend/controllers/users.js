const User = require('mongoose').model('User');

const util = require('../services/util');

module.exports.index = (req, res, next) => {
  if (req.query.count) {
    switch (req.query.count) {
      case 'submitted': {
        User.count({ application_status: "submitted" }, (err, submitted) => {
          if (err) {
            console.log(err);
            res.locals.error = err;
            return next();
          }

          res.locals.data = {
            submitted,
          };
          return next();
        });
        break;
      }
      case 'accepted': {
        User.count({ application_status: "accepted" }, (err, accepted) => {
          if (err) {
            console.log(err);
            res.locals.error = err;
            return next();
          }

          res.locals.data = {
            accepted,
          };
          return next();
        });
        break;
      }
      case 'rejected': {
        User.count({ application_status: "rejected" }, (err, rejected) => {
          if (err) {
            console.log(err);
            res.locals.error = err;
            return next();
          }

          res.locals.data = {
            rejected,
          };
          return next();
        });
        break;
      }
      case 'pm_interest': {
        User.count({ pm_interest: true }, (err, pmInterest) => {
          if (err) {
            console.log(err);
            res.locals.error = err;
            return next();
          }

          res.locals.data = {
            pm_interest: pmInterest,
          };
          return next();
        });
        break;
      }
      default: {
        console.log('this should not be hit...');
        console.log(req.query);
        return next();
      }
    }
  } else {
    // pagination settings
    const limit = req.query.limit || 10;
    const skip = (req.query.page - 1 || 0) * limit;

    Promise.all([
      User.find({ role: 'applicant' }).sort('-updatedAt')
        .limit(limit).skip(skip).populate('languages').populate('databases')
        .populate('web_technologies').populate('deployment').exec(),
      User.count({ role: 'applicant' }).exec()
    ]).then(([users, count]) => {
      res.locals.data = {
        users,
        count
      };
      return next();
    })
      .catch(err => {
        console.error(err);
        res.locals.errors = err;
        return next();
      });
  }
};

module.exports.get = (req, res, next) => {
  User.findById(req.params.id)
    .populate('languages')
    .populate('web_technologies')
    .populate('databases')
    .populate('deployment')
    .exec((err, usr) => {
      if (err) {
        console.error(err);
        res.locals.error = err;
        return next();
      }

      res.locals.data = {
        user: usr
      };
      return next();
    });
};

module.exports.store = (req, res, next) => {
  // protect application_status  and role changes
  let appStatus = 'none';
  let role = 'applicant';
  if (req.user.role === "admin") {
    appStatus = req.body.application_status ? req.body.application_status : appStatus;
    role = req.body.role ? req.body.role : role;
  }

  User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    title: req.body.title,
    credit_hours: req.body.credit_hours,
    frontend_experience: req.body.frontend_experience,
    backend_experience: req.body.backend_experience,
    pm_interest: req.body.pm_interest,
    graduation_date: req.body.graduation_date ? req.body.graduation_date : null,
    score: 0,
    role: role,
    application_status: appStatus,
    websites: req.body.websites ? req.body.websites : [],
    languages: req.body.languages ? req.body.languages : [],
    web_technologies: req.body.web_technologies ? req.body.web_technologies : [],
    databases: req.body.databases ? req.body.databases : [],
    deployment: req.body.deployment ? req.body.deployment : [],
    free_response: req.body.free_response ? req.body.free_response : {},
    github: req.body.github ? req.body.github : {}
  }, (err, usr) => {
    if (err) {
      console.error(err);
      res.locals.error = err;
      return next();
    }

    res.locals.data = {
      user: usr
    };
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
    user.pm_interest = req.body.pm_interest ? req.body.pm_interest : user.pm_interest;
    user.credit_hours = req.body.credit_hours ? req.body.credit_hours : user.credit_hours;
    user.graduation_date = req.body.graduation_date ? req.body.graduation_date : user.graduation_date;
    user.role = req.body.role ? req.body.role : user.role;
    user.frontend_experience = req.body.frontend_experience ? req.body.frontend_experience : user.frontend_experience;
    user.backend_experience = req.body.backend_experience ? req.body.backend_experience : user.backend_experience;
    user.free_response = req.body.free_response ? req.body.free_response : user.free_response;
    user.websites = req.body.websites ? req.body.websites : user.websites;
    user.languages = req.body.languages ? await util.strsToLangs(req.body.languages, "languages") : [];
    user.web_technologies = req.body.web_technologies ? await util.strsToLangs(req.body.web_technologies, "web_technologies") : [];
    user.databases = req.body.databases ? await util.strsToLangs(req.body.databases, "databases") : [];
    user.deployment = req.body.deployment ? await util.strsToLangs(req.body.deployment, "deployment") : [];
    user.github = req.body.github ? req.body.github : user.github;
    user.score = util.generateScore(user);
    // protect application_status changes
    if ((req.body.application_status) && (req.body.application_status === "submitted" || req.user.role === "admin")) {
      user.application_status = req.body.application_status ? req.body.application_status : user.application_status;
    }

    // protect role changes
    if (req.body.role && req.user.role === "admin") {
      user.role = req.body.role ? req.body.role : user.role;
    }


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
  User.remove({
    _id: req.params.id
  }, (err, usr) => {
    if (err) {
      console.error(err);
      res.locals.error = err;
      return next();
    }
    res.locals.data = {
      deleted: true
    };
    return next();
  });
};