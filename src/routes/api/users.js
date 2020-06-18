const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../../controllers/usersController');

router.post('/', userRegister)
      .post('/login', userLogin)

module.exports = router;
