'use strict';

const AWS = require('aws-sdk');
//todo required for local debugging
AWS.config.update({ region: process.env.SERVERLESS_REGION });

const co           = require('co'),
      Promise      = require('bluebird'),
      dynamo       = Promise.promisifyAll(new AWS.DynamoDB.DocumentClient()),
      log          = require('../../lib/log'),
      User         = require('../../model/User'),
      HttpResponse = require('../../model/HttpResponse');

const userTable = process.env.USER_TABLE;

module.exports.handle = (event, context, callback) => {
  co(function*(){
    log.debug('received event', event);
    return yield createUser(event, context);
  }).then(result => {
      log.debug('completed', result);
      callback(null, result);
  }).catch(e => {
    log.error('Error', e);
    callback(e);
  });
};

function* createUser(event, context) {
  let user = new User(event.username, event.firsName, event.lastName, event.gender);
  let params = {
    TableName: userTable,
    Item: user
  };
  yield dynamo.putAsync(params);

  //todo try catch errors here or in top level handler?
  return new HttpResponse(200, { id: user.id });
}