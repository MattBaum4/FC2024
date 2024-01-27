const MYSQL = require("mysql");

const db = MYSQL.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "FCAdmin123#!",
    database: "FCDB",
    multipleStatements: true,
})
module.exports = db;