function init(){
  require('aws-sdk').config.region = process.env.AWS_REGION;
  process.env.USER_TABLE = `serverless-sample-user-${process.env.AWS_STAGE}`;

  process.env.URL = `https://tl0orf5x0a.execute-api.eu-west-1.amazonaws.com/${process.env.AWS_STAGE}`;

  console.log('api url: ', process.env.URL);
}

module.exports = {
  init
};