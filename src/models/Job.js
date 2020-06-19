const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = Job = mongoose.model('job', JobSchema);
