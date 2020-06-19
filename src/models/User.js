const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    requried: true
  },
  avatar: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  jobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobs'
      }
    }
  ]
})

module.exports = User = mongoose.model('user', UserSchema);
