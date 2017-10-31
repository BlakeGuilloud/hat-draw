const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  spouse: {
    type: String,
    required: true,
    default: '',
  },
  drawn: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);