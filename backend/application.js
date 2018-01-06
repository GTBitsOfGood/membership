const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const GitHubStrategy = require("passport-github").Strategy;
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
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    (access_token, refreshToken, profile, done) => {
      // try to find the user based on their github id
      User.findOne({ github_id: profile.id }, (err, user) => {
        // check for error
        if (err) return done(err, null);

        // return user if exists in db
        if (user) return done(null, user);

        // create new user in db
        const github = {
          access_token,
          id: profile._json.id,
          username: profile._json.login,
          avatar_url: profile._json.avatar_url,
          profile_url: profile._json.html_url,
          public_repos: profile._json.public_repos,
          followers: profile._json.followers
        }
        const newUser = new User({
          github,
          name: profile._json.name,
          email: profile._json.email
        });
        return newUser.save(err2 => {
          if (err2) return done(err2, null);
          return done(null, newUser);
        });
      });
    }
  )
);

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

router.get("/profile", (req, res) => {
  if (req.user) {
    return res.status(200).json({ user: req.user });
  }
  return res.status(401).json({ error: "Not Logged in" });
});

router.get(
  "/auth/github",
  passport.authenticate("github", { failureRedirect: "/login2" })
);

router.get("/auth/github/callback",
  passport.authenticate("github"), (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
// Logout Route
router.get('/logout', (req, res) => {
  req.logout();
  return res.status(200).json({ logout: 'success' });
});

router.use('/', (req, res, next) => {
  if (res.locals.data) {
    const response = Object.assign({}, res.locals.data, {
      'status': 'ok'
    });
    return res.status(200).json(response);
  } else if (res.locals.error) {
    const statusCode = res.locals.error.status || 500;
    const response = Object.assign({}, res.locals.error, {
      'status': 'error'
    });
    return res.status(statusCode).json(response);
  }
  return res.status(500).json({
    'status': 'error',
    'msg': 'Internal Server Error'
  });
});

//* ************* LOGIN WALL *******************
router.use((req, res, next) => {
  if (process.env.DEBUG === 'true') return next();
  return req.user ? next() : res.status(401).send('YOU MUST BE AUTHENTICATED TO ACCESS THIS ROUTE');
});

module.exports = router;

