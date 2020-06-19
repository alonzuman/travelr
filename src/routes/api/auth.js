const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authenticateUser = require('../../controllers/authController');

router.get('/', auth, authenticateUser)

module.exports = router;
