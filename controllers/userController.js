"use strict";

var User = require("../models/userModel");

var controller = {
  create: function (req, res) {
    return res.status(200).send({
      message: "User controller working well",
    });
  },
};

module.exports = controller;
