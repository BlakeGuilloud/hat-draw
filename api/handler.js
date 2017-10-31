const { handleSuccess, handleError, tryParse } = require('serverless-helpers/responses');

const mongoose = require('./lib/mongoose');
const drawName = require('./lib/drawName');
const { fetchUsers, updateUser } = require('./lib/service');
const { superSecretUri } = require('./lib/config');

module.exports.hatDraw = (event, context, callback) => {
  const db = mongoose.connect(superSecretUri, { useMongoClient: true });

  fetchUsers()
    .then(data => drawName(tryParse(event.body).name, data))
    .then(updateUser)
    .then(response => callback(null, handleSuccess(response)))
    .catch(err => callback(null, handleError(err)))
    .finally(() => db.close());
};
