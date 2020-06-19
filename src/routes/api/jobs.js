const express = require('express');
const router = express.Router();
const { getMyJobs, getAllJobs, addJob, approveJob, deleteJob } = require('../../controllers/jobsController');
const auth = require('../../middleware/auth');

router.get('/', auth, getMyJobs)
      .post('/', auth, addJob)
      .delete('/:id', deleteJob)
      .get('/all', getAllJobs)

module.exports = router;
