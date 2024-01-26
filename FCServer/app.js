//! Server Backend Initialization
const express = require("express");
const app = express();
app.use(express.json());
//! PORT
const PORT = 3307

app.listen(PORT, () => {
    console.log(`Server properly running on port ${PORT}`);
  });







 