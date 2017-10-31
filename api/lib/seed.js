const mongoose = require('./mongoose');

const db = mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

const User = require('./model');
const data = require('./seedData');

User.remove({})
  .then(() => User.collection.insert(data))
  .finally(() => db.close());
