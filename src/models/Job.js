const User = require('./User');
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean,
    default: false
  },
  volunteer: User
})

module.exports = Job = mongoose.model('job', JobSchema);
