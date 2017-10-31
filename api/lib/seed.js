const mongoose = require('./mongoose');
const { superSecretUri } = require('./config');

const db = mongoose.connect(superSecretUri, { useMongoClient: true });

const User = require('./model');
const data = require('./seedData');

User.remove({})
  .then(() => User.collection.insert(data))
  .finally(() => db.close());
