const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express(); //execute express, easy routes
const port = 3000;
require("dotenv/config"); //for the .env file that helps us keep the password out of the code
app.use(express.json()); //to parse the bodies of requests into JSON
app.use(cors()); //Allow other domains to make requests
//Import Routes
const homeRoute = require("./routes/home"); //import home route
const userRoute = require("./routes/user"); //import user route
const postsRoute = require("./routes/posts"); //import posts route
//Middle-wares. BAsically a function that executes when certain routes are hit (similar to triggers)
//Note the path starts at localhost:<port> --> localhost:<port>/user --> localhost:<port>/user/posts
app.use("/", homeRoute); //call on router in home.js
app.use("/user", userRoute); //call on router in user.js
app.use("/user/posts", postsRoute); //call on router in posts.js
//use body parser to be able to interpret requests and translate them into JSON
//
//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to db!");
});

//Start listening to the server
app.listen(port); //no error checking not good practice
