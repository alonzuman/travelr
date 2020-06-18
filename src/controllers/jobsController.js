const User = require('../models/User');
const jobs = [
  { id: 1, title: 'Consequat incididunt non deserunt proident eu tempor magna duis qui ea cillum ullamco.', username: 'Kyle' },
  { id: 2, title: 'Quis amet eu consectetur velit labore.', username: 'alonzuman' },
  { id: 3, title: 'Occaecat do sint cupidatat amet esse.', username: 'alonzuman' },
]

const getAllJobs = async (req, res) => res.json({
  jobs
});

const getMyJobs = async (req, res) => res.json({
  jobs
});

const addJob = async (req, res) => {
  try {
    let user = await User.findById(req.body.id);
    const job = new Job({
     id: Math.random(),
     description: 'Velit non qui commodo laboris sit.',
     startTime: Date.now(),
     endTime: Date.now() + 1,
     volunteer: user
   })

   await job.save();
   return res.status(200).json({
     msg: 'Added new job!',
     job
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

module.exports = { getAllJobs, getMyJobs, addJob, deleteJob }
