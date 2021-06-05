"use strict";

var express = require("express");
var ProyectController = require("../controllers/proyectController");

var router = express.Router();

router.get("/home", ProyectController.home);

router.post("/test", ProyectController.test);

router.post("/save-proyect", ProyectController.saveProyect);

router.get("/proyect/:id?", ProyectController.getProyect);

router.get("/proyects", ProyectController.getProyects);

router.put("/proyect/:id", ProyectController.updateProyect);

module.exports = router;
