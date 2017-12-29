const mongoose = require('mongoose');
const async = require('async');
const Language = require('mongoose').model('Language');
const languages = require('./support/languages');

function seed(exit) {
  async.each(languages, (l, cb) => {
  Language.findOne({
  name: l.name
}, (err, lang) => {
  if (err) {
  console.error(err);
  return cb(err);
}
  if (lang !== null) return cb(null);

  Language.create(l, (err, res) => {
  if (err) console.error(err);
  return cb(err);
});
});
}, exit);
}

module.exports = seed;