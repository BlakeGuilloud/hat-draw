const mongoose = require('./mongoose');
const { MONGODB_URI } = require('./config');

const db = mongoose.connect(MONGODB_URI, { useMongoClient: true });

const User = require('./model');
const data = require('./seedData');

User.remove({})
  .then(() => User.collection.insert(data))
  .finally(() => db.close());
