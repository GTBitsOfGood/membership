require('dotenv').config();
require('../db');
const async = require('async');
const normalizedPath = require('path').join(__dirname);

const blacklist = ['index.js', 'support'];

async.each(
  require('fs').readdirSync(normalizedPath),
  (file, cb) => {
    if (blacklist.indexOf(file) === -1) {
      console.log(`--- SEEDING: ${file} ---`);
      require(`./${file}`)(cb);
    } else {
      return cb(null);
    }
  },
  err => {
    if (err) console.error(err);
    console.log('--- SEEDING COMPLETE ---');
    process.exit(0);
  }
);
