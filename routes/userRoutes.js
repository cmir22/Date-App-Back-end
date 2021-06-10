"use strict";

var express = require("express");
var UserController = require("../controllers/userController");

var router = express.Router();

router.post("/create", UserController.create);
router.delete("/remove", UserController.remove);

module.exports = router;
