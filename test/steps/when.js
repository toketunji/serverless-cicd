'use strict';

const Promise = require('bluebird'),
      http    = require('superagent-promise')(require('superagent'), Promise);

const url = `${process.env.URL}/users`;

function* a_user_is_registered(userDetails) {
  let res = yield http
    .post(url, userDetails);

  return res.body;
}

module.exports = {
  a_user_is_registered
};