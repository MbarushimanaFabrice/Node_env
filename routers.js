const express = require("express");
const router = express.Router();
const db = require("./db");

router.post("/addstudent", (req, res) => {
  const { studentName, className } = req.body;
  const insert = "INSERT INTO students VALUES('',?,?)";
  db.query(insert, [studentName, className], (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});
module.exports = router;
