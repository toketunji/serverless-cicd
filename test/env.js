function init(){
  process.env.AWS_REGION = 'eu-west-1';
  require('aws-sdk').config.region = process.env.AWS_REGION;
  process.env.AWS_STAGE = 'dev';
  process.env.USER_TABLE = `serverless-sample-user-${process.env.AWS_STAGE}`;

  process.env.URL = `https://5atiwoggt5.execute-api.eu-west-1.amazonaws.com/${process.env.STAGE}`;
}

module.exports = {
  init
};