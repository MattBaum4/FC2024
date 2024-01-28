//! Server Backend Initialization
const express = require("express");
const app = express();
app.use(express.json());
const MYSQL = require("mysql2");
const cors = require("cors");
const pool = require("./db")

//! Connect to the Database
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
    connection.release();
  }
});
app.use(cors());
app.use(express.json());

//Controllers
const photosController = require("./controllers/photos");

//Routes
app.use("/photos", photosController);

//! PORT
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server properly running on port ${PORT}`);
});

module.exports = {
  app,
  pool,
};
