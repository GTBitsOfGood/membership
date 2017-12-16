const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

require('./db');
// Local Imports
const User = mongoose.model('User');

// Middleware
router.use(morgan('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(session({
  secret: process.env.SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: false
}));
router.use(passport.initialize());
router.use(passport.session());


// Passport Config
passport.use(new LocalStrategy({
  usernameField: 'email',
},
  function(email, password, done) {
    User.findOne({ email }, function(err, user) {
      if (err) return done(err);
      if (!user || !user.verifyPassword(password)) {
        return done(null, false, { message: 'Login Error.' });
      }
      return done(null, user);
    });
  }));

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    return done(err, user);
  });
});

const routes = require('./routes');
router.use('/', routes);

router.use('/', (req, res, next) => {
  if (res.locals.data) {
    let response = Object.assign({}, res.locals.data, {
      'status': 'ok'
    });
    return res.status(200).json(response);
  } else if (res.locals.error) {
    let statusCode = res.locals.error.status || 500;
    let response = Object.assign({}, res.locals.error, {
      'status': 'error'
    });
    return res.status(statusCode).json(response);
  } else {
    return res.status(500).json({
      'status': 'error',
      'msg': 'Internal Server Error'
    });
  }
});

//* ************* LOGIN WALL *******************
router.use((req, res, next) => {
  if (process.env.DEBUG === 'true') return next();
  return req.user ? next() : res.status(401).send('YOU MUST BE AUTHENTICATED TO ACCESS THIS ROUTE');
});

module.exports = router;

