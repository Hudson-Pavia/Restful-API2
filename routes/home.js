const express = require("express");

const router = express.Router(); //can use the ROUTER to make routes instead of the application. helps with modulating

router.get("", (req, res) => {
  //for the home route
  res.send("We are on home");
});

module.exports = router;
