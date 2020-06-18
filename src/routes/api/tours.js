const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { getTours } = require('../../controllers/toursController');

router.get('/', getTours);

module.exports = router;
