'use strict';

const AWS     = require('aws-sdk'),
      Promise = require('bluebird'),
      dynamo  = Promise.promisifyAll(new AWS.DynamoDB.DocumentClient());

const userTable = process.env.USER_TABLE;

//Note: If you have an api to fetch user details then it would be preferrable to
//use this instead of going to the database
function* the_user_exists(id) {
  let params = {
    TableName: userTable,
    KeyConditionExpression: 'id = :id',
    ConsistentRead: true,
    ExpressionAttributeValues: {
      ':id': id,
    }
  };

  let result = yield dynamo.queryAsync(params);

  if (result.Items.length === 0) {
    return null;
  }
  return result.Items[0];
}

function* the_user_is_deleted(id) {
  let params = {
    TableName : userTable,
    Key: {
      HashKey: id,
    }
  };

  yield dynamo.deleteAsync(params);
}

module.exports = {
  the_user_exists,
  the_user_is_deleted
};