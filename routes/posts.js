const express = require("express");
const router = express.Router(); //can use the ROUTER to make routes instead of the application. helps with modulating
const Post = require("../models/Post");
//Gets back all the posts at user/posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
//Submits a post
router.post("/", async (req, res) => {
  const post = new Post({
    //create a new entry for the Post table we created
    title: req.body.title, //get title from the request body
    description: req.body.description,
  });
  try {
    const savedPost = await post.save(); // send the post to the database with post.save()
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
//fetch specific post

module.exports = router;
