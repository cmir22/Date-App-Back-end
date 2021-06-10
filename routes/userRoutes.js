"use strict";

var express = require("express");
var UserController = require("../controllers/userController");

var router = express.Router();

router.get("/create", UserController.create);

module.exports = router;
