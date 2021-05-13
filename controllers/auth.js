const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');


//signup page
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

//login
router.get('/login', (req, res) => {
  res.render('auth/login');
});

module.exports = router;
