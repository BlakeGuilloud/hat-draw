const mongoose = require('mongoose');

const { superSecretUri } = require('./config');

const db = mongoose.connect(superSecretUri, { useMongoClient: true });
mongoose.Promise = global.Promise;

const User = require('./model');

const data = [
  {
    name: 'blake',
    spouse: 'carolyn',
    drawnBy: '',
  },
  {
    name: 'jen',
    spouse: 'thomas',
    drawnBy: '',
  },
  {
    name: 'thomas',
    spouse: 'jen',
    drawnBy: '',
  },
  {
    name: 'carolyn',
    spouse: 'blake',
    drawnBy: '',
  },
  {
    name: 'brian',
    spouse: 'asuka',
    drawnBy: '',
  },
  {
    name: 'asuka',
    spouse: 'brian',
    drawnBy: '',
  },
  {
    name: 'grady',
    spouse: '',
    drawnBy: '',
  }
];

User.collection.insert(data, (err, data) => {
  console.log('data', data.ops);
  console.log('err', err);
  db.close();
})