'use strict';

const co           = require('co'),
      Promise      = require('bluebird'),
      AWS          = require('aws-sdk'),
      dynamo       = Promise.promisifyAll(new AWS.DynamoDB.DocumentClient()),
      User         = require('../../model/User'),
      HttpResponse = require('../../model/HttpResponse');

const userTable = process.env.USER_TABLE;

module.exports.handle = (event, context, callback) => {
  co(function*(){
    console.log('received event', event);
    return yield createUser(event, context);
  }).then(result => {
      console.log('completed', result);
      callback(null, result);
  }).catch(e => {
    console.error('Error', e);
    callback(e);
  });
};

function* createUser(event, context) {
  let user = new User(event.username, event.firstName, event.lastName, event.gender);
  let params = {
    TableName: userTable,
    Item: user
  };
  yield dynamo.putAsync(params);

  //todo try catch errors here or in top level handler?
  return new HttpResponse(200, { id: user.id });
}