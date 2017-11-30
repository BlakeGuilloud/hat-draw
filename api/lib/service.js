const User = require('./model');

const updateUser = ({ randomUser, user }) =>
  User.findByIdAndUpdate(user._id, { selection: randomUser.name })
    .then(() => User.findByIdAndUpdate(randomUser._id, { drawn: true }))
    .catch(err => Promise.reject(err))

const fetchUsers = () =>
  User.find()
    .catch(err => Promise.reject(err))

module.exports = {
  fetchUsers,
  updateUser,
};