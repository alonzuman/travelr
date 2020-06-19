const express = require('express');
const router = express.Router();
const { getMyJobs, getAllJobs, addJob, approveJob, deleteJob, unapproveJob } = require('../../controllers/jobsController');
const auth = require('../../middleware/auth');

router.get('/', auth, getMyJobs)
      .post('/', auth, addJob)
      .delete('/:id', deleteJob)
      .post('/:id/approve', approveJob)
      .post('/:id/unapprove', unapproveJob)
      .get('/all', getAllJobs)

module.exports = router;
