const mysql = require('mysql2');
const express = require('express');
const app = express();
const dbconnect = mysql.createPool({
  host: "localhost",
  user:"forumdb",
  password: "biniam@bini",
  database:"forumdb",
});

module.exports = dbconnect.promise();