const express = require('express');
const router = express.Router();

//signup page
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

//login page
router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;
