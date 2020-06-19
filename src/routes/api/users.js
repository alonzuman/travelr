const express = require('express');
const router = express.Router();
const { getUser, getAllUsers, userRegister, userLogin, makeAdmin, removeAdmin } = require('../../controllers/usersController');
const auth = require('../../middleware/auth');

router.post('/', userRegister)
      .post('/login', userLogin)
      .post('/:id/makeAdmin', auth, makeAdmin)
      .post('/:id/removeAdmin', auth, removeAdmin)
      .get('/', auth, getAllUsers)
      .get('/:id', auth, getUser)

module.exports = router;
