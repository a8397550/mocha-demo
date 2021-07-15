const axios = require('axios');
const {BaseUrl} = require('./config');

const request = function ({
  method =  'get',
  url = '',
  data,
  header = {}
}) {

  if (!method) {
    method = 'get';
  }

  if (!header['content-type']) {
    // header['content-type'] = 'application/x-www-form-urlencoded';
    header['content-type'] = 'application/json';
  }

  return axios({
    header,
    method,
    url: BaseUrl + url,
    data
  }).then((res) => {
    return res.data;
  }).catch(err => {
    return Promise.reject(err.data)
  });
}

module.exports = {
  request
}