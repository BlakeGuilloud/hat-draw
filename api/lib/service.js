const User = require('./model');

const updateUser = ({ randomUser, user }) =>
  User.findByIdAndUpdate(randomUser._id, { drawnBy: user.name })
    .catch(err => Promise.reject(err))

const fetchUsers = () => User.find()
  .catch(err => Promise.reject(err))

module.exports = {
  fetchUsers,
  updateUser,
};