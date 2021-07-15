const axios = require('axios');
const {BaseUrl} = require('./libConfig');

const request = function ({
  method =  'get',
  url = '',
  data,
  headers = {}
}) {

  if (!method) {
    method = 'get';
  }

  if (!headers['Content-Type']) {
    // header['content-type'] = 'application/x-www-form-urlencoded';
    headers['Content-Type'] = 'application/json';
  }

  return axios({
    headers,
    method,
    url: BaseUrl + url,
    data
  }).then((res) => {
    return res.data;
  }).catch(err => {
    return Promise.reject(err.data || err)
  });
}

module.exports = {
  request
}