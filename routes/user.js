const express = require("express");

const router = express.Router(); //can use the ROUTER to make routes instead of the application. helps with modulating

router.get("/", (req, res) => {
  res.send("We are on user page");
});

module.exports = router;
