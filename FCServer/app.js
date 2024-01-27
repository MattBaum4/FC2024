//! Server Backend Initialization
const express = require("express");
const app = express();
app.use(express.json());
const MYSQL = require('mysql')
const cors = require("cors");

//! Connect to the Database
app.use(cors());
app.use(express.json());
const db = require("./db");

db.once("open", () => {
  if (err) {
    console.error("failed to connect", err)
  }else{
    console.log("Connected to the Database: " + db.host);
  }
});


//! PORT
const PORT = 3307

app.listen(PORT, () => {
    console.log(`Server properly running on port ${PORT}`);
  });

  console.log("Working from app.js")






 