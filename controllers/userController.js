"use strict";

var User = require("../models/userModel");

var controller = {
  create: function (req, res) {
    var user = new User();
    var params = req.body;

    user.password = params.password;
    user.username = params.username;
    user.email = params.email;

    user.save((err, userSaved) => {
      if (err) return err.status(500).send({ message: "Error to save data" });
      if (!userSaved) res.status(404).send({ message: "User do not saved" });
      return res.status(200).send({ message: userSaved });
    });
  },
  remove: function (req, res) {
    var user = new User();
    var params = req.body;
    user.username = params.username;

    user.deleteOne({ username: user["username"] }),
      function (err, result) {
        if (err) res.send(err);
        else res.send(result);
      };
    // res.status(200).send({ message: "Ready to remove elements" });
  },
};

module.exports = controller;
