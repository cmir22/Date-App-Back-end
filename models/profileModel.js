"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
  age: Number,
  genere: String,
  like: String,
  description: String,
  //   img: null,
  //   profile_img: null,
  user_id: String,
});

module.exports = mongoose.model("Profile", ProfileSchema);
