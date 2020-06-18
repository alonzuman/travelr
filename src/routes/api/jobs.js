const express = require('express');
const router = express.Router();
const { getMyJobs, getAllJobs, addJob, approveJob, deleteJob } = require('../../controllers/jobsController');

router.get('/', getMyJobs)
      .post('/', addJob)
      .delete('/:id', deleteJob)
      .get('/all', getAllJobs)

module.exports = router;
