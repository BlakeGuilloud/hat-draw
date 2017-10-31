const drawName = require('./drawName');

const data = [
  {
    name: 'blake',
    spouse: 'carolyn',
  },
  {
    name: 'jen',
    spouse: 'thomas',
  },
  {
    name: 'thomas',
    spouse: 'jen',
  },
  {
    name: 'carolyn',
    spouse: 'blake',
  },
  {
    name: 'brian',
    spouse: 'asuka',
  },
  {
    name: 'asuka',
    spouse: 'brian',
  },
  {
    name: 'grady',
    spouse: '',
  }
];

const final = drawName('blake', data);
console.log('final', final);

// 'use strict';

// module.exports.hello = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   callback(null, response);
// };
