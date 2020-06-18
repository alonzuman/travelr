const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const authenticateUser = require('../../controllers/authController');

router.get('/', auth, authenticateUser)

module.exports = router;
