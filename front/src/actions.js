import axios from 'axios';

const BASE_URL = 'https://3gxfqtgnea.execute-api.us-east-1.amazonaws.com/dev/hatDraw';

export function drawName(name) {
  return axios.post(BASE_URL, { name })
    .then((response) => {
      console.log('response', response);
    })
}