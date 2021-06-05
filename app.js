"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Config Routes
var proyect_routes = require("./routes/proyectRoutes");

// Middelwares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors

// Routes
app.use("/api", proyect_routes);

// Export Module
module.exports = app;
