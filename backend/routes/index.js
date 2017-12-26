// NPM Packages
const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const router = express.Router();

// Local Imports
const User = require('../models/user');
const users = require('./users');

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
// passport.use(new LocalStrategy({
//   usernameField: 'email',
// },
//   function(email, password, done) {
//     User.findOne({ email }, function(err, user) {
//       if (err) return done(err);
//       if (!user || !user.verifyPassword(password)) {
//         return done(null, false, { message: 'Login Error.' });
//       }
//       return done(null, user);
//     });
//   }));
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:3000/api/auth/github/callback"
},
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      // try to find the user based on their google id
      User.findOne({ 'github_id': profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) return done(null, user);
        const newUser = new User({
          github_id: profile.id,
          github_access_token: accessToken
        });
        newUser.save(err => {
          if (err) return done(err);
          return done(null, newUser);
        });
      });
    });

    // console.log('########################################\n\n');
    // console.log(accessToken);
    // console.log('########################################\n\n');
    // console.log(refreshToken);
    // console.log('########################################\n\n');
    // console.log(profile);
    // console.log('########################################\n\n');

    // User.findOne({ github_id: profile.id })
    //   .then(user => {
    //     return (resolve, reject) => {
    //       if (user) {
    //         resolve(user);
    //       } else {
    //         const newUser = new User({github_id: profile.id, accessToken, refreshToken});
    //         newUser.save()
    //           .then(resolve)
    //           .catch(reject);
    //       }
    //       // User.find({ githubId: profile.id }
    //     };
    //   })
    //   .then(user => cb(null, user))
    //   .catch(err => {
    //     console.log(err);
    //     return cb(err);
    //   });
    // const newUser = new User({ githubId: profile.id });
    // User.find({ githubId: profile.id }, function(err, user) {
    //   return cb(err, user);
    // });

    // User.findOne({ email }, function(err, user) {
    //   if (err) return cb(err);
    //   if (!user || !user.verifyPassword(password)) {
    //     return cb(null, false, { message: 'Login Error.' });
    //   }
    //   return cb(null, user);
    // });
  }
));

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    return done(err, user);
  });
});

router.get('/login', (req, res) => {
  res.send('login failed.');
});

router.get('/profile', (req, res) => {
  if (req.user) {
    return res.status(200).json({ user: req.user });
  }
  return res.status(401).json({ error: 'Not Logged in' });
});

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/api/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Login Route
// router.post('/login', (req, res) => {
//   passport.authenticate('local', (errors, user) => {
//     req.logIn(user, () => {
//       if (errors) return res.status(500).json({ errors });
//       return res.status(user ? 200 : 400).json(user ? { user } : { errors: "Login Failed" });
//     });
//   })(req, res);
// });

// Logout Route
router.get('/logout', (req, res) => {
  req.logout();
  return res.status(200).json({ logout: 'success' });
});

router.use('/users', users);

//* ************* LOGIN WALL *******************
router.use((req, res, next) => {
  return req.user ? next() : res.status(401).send('YOU MUST BE AUTHENTICATED TO ACCESS THIS ROUTE');
});

// Restful endpoints

module.exports = router;

