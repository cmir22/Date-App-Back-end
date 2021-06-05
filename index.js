"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/web_dates")
  .then((res) => {
    console.log("Conected with database");
    // Create server
    app.listen(port, () => {
      console.log("Server Running correctly on localhost:3700");
    });
  })
  .catch((err) => console.log(err));
