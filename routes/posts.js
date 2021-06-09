const express = require("express");
const router = express.Router(); //can use the ROUTER to make routes instead of the application. helps with modulating
const Post = require("../models/Post");
router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/", async (req, res) => {
  const post = new Post({
    //create a new entry for the Post table we created
    title: req.body.title, //get title from the request body
    description: req.body.description,
  });
  const savedPost = await post // send the post to the database with post.save()
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      //error check
      res.json({ message: err });
    });
});

module.exports = router;
