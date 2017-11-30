import axios from 'axios';

const BASE_URL = 'https://3gxfqtgnea.execute-api.us-east-1.amazonaws.com/dev/';

export function drawName(name) {
  return axios.post(BASE_URL + 'hatDraw', { name })
    .then((response) => {
      console.log('response', response);
    })
}

export function fetchNames() {
  return axios.get(BASE_URL + 'fetchUsers')
    .then(response => response.data);
}
