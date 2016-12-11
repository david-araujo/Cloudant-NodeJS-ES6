/** @name: connection.js @author: Thiago Lima @description: Connection file */

const Cloudant = require('cloudant');

const connection = {
  account: 'account',
  password: 'password'

};

let cloudant = Cloudant(connection);

let db = cloudant.use('stores');

console.log(db);

module.exports = db;
