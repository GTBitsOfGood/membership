const Language = require('mongoose').model('Language');

module.exports.index = (req, res, next) => {
  Language.find({}, (err, languages) => {
    if (err) {
      console.error(err);
      res.locals.errors = err;
      return next();
    }

    res.locals.data = {
      languages: languages
    };
    return next();
  });
};

module.exports.get = (req, res, next) => {
  Language.findById(req.params.id, (err, language) => {
    if (err) {
      console.error(err);
      res.locals.errors = err;
      return next();
    }

    res.locals.data = {
      language: language
    };
    return next();
  });
};

module.exports.update = (req, res, next) => {
  Language.findById(req.params.id, (err, language) => {
    if (err) {
      console.error(err);
      res.locals.errors = err;
      return next();
    }

    language.name = req.body.name ? req.body.name : language.name;
    language.value = req.body.value ? req.body.value : language.value;
    language.category = req.body.category
      ? req.body.category
      : language.category;

    language.save((err, updatedLanguage) => {
      res.locals.data = {
        language: updatedLanguage
      };
      return next();
    });
  });
};

module.exports.store = (req, res, next) => {
  Language.create(
    {
      name: req.body.name,
      value: req.body.value,
      category: req.body.category
    },
    (err, language) => {
      if (err) {
        console.error(err);
        res.locals.errors = err;
        return next();
      }

      res.locals.data = {
        language: language
      };
      return next();
    }
  );
};

module.exports.delete = (req, res, next) => {
  Language.remove(
    {
      _id: req.params.id
    },
    (err, language) => {
      if (err) {
        console.error(err);
        res.locals.errors = err;
        return next();
      }

      res.locals.data = {
        deleted: true
      };
      return next();
    }
  );
};
