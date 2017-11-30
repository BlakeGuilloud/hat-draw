const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  spouse: {
    type: String,
    required: true,
  },
  selection: {
    type: String,
    required: true,
  },
  drawn: {
    type: Boolean,
    required: true,
  }
});

module.exports = mongoose.model('User', UserSchema);