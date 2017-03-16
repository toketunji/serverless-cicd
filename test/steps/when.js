'use strict';

const Promise = require('bluebird'),
      http    = require('superagent-promise')(require('superagent'), Promise),
      invoke  = require('../lib/invoke'),
      handler = require('../../api/users/post').handle;

const url = `${process.env.URL}/users`;

function* a_user_is_registered(userDetails) {
  if(process.env.TARGET === 'local') {
    let res = yield invoke(userDetails, handler);
    return res.body;
  }

  let res = yield http
    .post(url, userDetails);
  return res.body;
}

module.exports = {
  a_user_is_registered
};