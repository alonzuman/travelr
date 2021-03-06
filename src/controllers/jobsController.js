const User = require('../models/User');
const Job = require('../models/Job');

const getAllJobs = async (req, res) => res.json({
  // jobs
});

const getMyJobs = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
    const jobs = await Job.find({user: user.id});
    res.status(200).json({
      jobs
    })
  } catch (error) {
    res.status(500).json({
      msg: `Server Error`
    })
  }
};

const addJob = async (req, res) => {

  try {
    const job = req.body.job
    let user = await User.findById(req.user.id).select('-password');
    const newJob = new Job({
      description: job.description,
      date: job.date,
      hours: job.hours,
      user: user
    })

   await newJob.save();
   await user.jobs.push(newJob);
   await user.save()
   return res.status(200).json({
     msg: 'Added new job!',
     newJob
   })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Server Error'
    })
  }
};

const deleteJob = async (req, res) => res.json({
  jobs
});

const approveJob = async (req, res) => {
  try {
    let job = await Job.findById({ _id: req.params.id });
    job.approved = true;
    await job.save();
    res.status(201).json({ msg: 'Job approved!' })
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

const unapproveJob = async (req, res) => {
  try {
    let job = await Job.findById({ _id: req.params.id });
    job.approved = false;
    await job.save();
    res.status(201).json({ msg: 'Job approved!' })
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' })
  }
}

module.exports = { unapproveJob, approveJob, getAllJobs, getMyJobs, addJob, deleteJob }
