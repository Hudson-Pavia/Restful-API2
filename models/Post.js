const mongoose = require("mongoose");

//create db schema
const PostSchema = mongoose.Schema({
  //building the Post table schema
  //title
  title: {
    type: String, //indicate the type of the attribute
    required: true, //required or not?
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, //set a default attribute for the field
  },
});

module.exports = mongoose.model("Posts", PostSchema); //export the schema to the actual MongoDb database
