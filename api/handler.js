const { handleSuccess, handleError, tryParse } = require('serverless-helpers/responses');

const mongoose = require('./lib/mongoose');
const drawName = require('./lib/drawName');
const { fetchUsers, updateUser } = require('./lib/service');

module.exports.hatDraw = (event, context, callback) => {
  const db = mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

  fetchUsers()
    .then(data => drawName(tryParse(event.body).name, data))
    .then(updateUser)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
};

module.exports.fetchUsers = (event, context, callback) => {
  const db = mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

  fetchUsers()
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
}