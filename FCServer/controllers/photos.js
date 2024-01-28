const router = require("express").Router();
const pool = require("../db");
//Endpoints

router.get("/view-all", async (req, res) => {
  try {
    const sql = `SELECT * FROM fc2024.photos`;
    pool.query(sql, (err, results) => {
      if (err) {
        console.error("SQL Error: ", err);
        res.status(500).json({
          message: "Internal Server Error",
        });
      } else {
        res.json({
          message: "View All Successful",
          photos: results,
        });
      }
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;
