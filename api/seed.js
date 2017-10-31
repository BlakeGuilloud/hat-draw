const mongoose = require('mongoose');

const { superSecretUri } = require('./config');

const db = mongoose.connect(superSecretUri, { useMongoClient: true });
mongoose.Promise = global.Promise;

const User = require('./User.model');

const data = [
  {
    name: 'blake',
    spouse: 'carolyn',
    drawn: false,
  },
  {
    name: 'jen',
    spouse: 'thomas',
    drawn: false,
  },
  {
    name: 'thomas',
    spouse: 'jen',
    drawn: false,
  },
  {
    name: 'carolyn',
    spouse: 'blake',
    drawn: false,
  },
  {
    name: 'brian',
    spouse: 'asuka',
    drawn: false,
  },
  {
    name: 'asuka',
    spouse: 'brian',
    drawn: false,
  },
  {
    name: 'grady',
    spouse: '',
    drawn: false,
  }
];

User.collection.insert(data, (err, data) => {
  console.log('data', data.ops);
  console.log('err', err);
  db.close();
})