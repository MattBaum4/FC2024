//! Server Backend Initialization
const express = require("express");
const app = express();
app.use(express.json());
//! PORT
const PORT = 3307

app.listen(PORT, () => {
    console.log(`Server properly running on port ${PORT}`);
  });


//Need to connect a new SQL Database to this backend, then work on different endpoints for what we wanna do. 
//I think we can make it possible for the client to go in and manipulate photos etc on his own using admin properties.
// Only need to make one kind of person able to log in - THE ADMINS.




 