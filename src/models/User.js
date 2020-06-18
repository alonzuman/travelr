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
  isGuide: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = User = mongoose.model('user', UserSchema);
