const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  passport.authenticate('local', (errors, user) => {
    req.logIn(user, () => {
      if (errors) return res.status(500).json({ errors });
      return res.status(user ? 200 : 400).json(user ? { user } : { errors: "Login Failed" });
    });
  })(req, res);
});

// Logout Route
router.get('/logout', (req, res) => {
  req.logout();
  return res.status(200).json({ logout: 'success' });
});