"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  password: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("User", UserSchema);
