'use strict';

const chance = new require('chance')();

//todo tests for errors
exports = class User {
  constructor(username, firstName, lastName, gender) {
    this.id = chance.guid();

    if(!username) {
      throw new Error('You must provide a username');
    }

    if(gender && (gender != 'm' || gender != 'f' ) ) {
      throw new Error('Gender must be m or f');
    }

    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
};