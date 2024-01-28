const MYSQL = require("mysql2");

const pool = MYSQL.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "FCAdmin123#!",
  database: "fc2024",
  multipleStatements: true,
});

module.exports = pool;
