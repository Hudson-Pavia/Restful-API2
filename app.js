const express = require("express");
const mongoose = require("mongoose");
const app = express(); //execute express, easy routes
const port = 3000;
require("dotenv/config"); //for the .env file that helps us keep the password out of the code
//Import Routes
const homeRoute = require("./routes/home"); //import home route
const userRoute = require("./routes/user"); //import user route
const postsRoute = require("./routes/posts"); //import posts route
//Middle-wares. BAsically a function that executes when certain routes are hit (similar to triggers)
//Note the path starts at localhost:<port> --> localhost:<port>/user --> localhost:<port>/user/posts
app.use("/", homeRoute); //call on router in home.js
app.use("/user", userRoute); //call on router in user.js
app.use("/user/posts", postsRoute); //call on router in posts.js
//
//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db!");
});

//Start listening to the server
app.listen(port); //no error checking not good practice
