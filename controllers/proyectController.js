"use strict";

var Proyect = require("../models/proyectModel");

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "I am home",
    });
  },
  test: function (req, res) {
    return res.status(200).send({
      message: "From controller proyect",
    });
  },
  saveProyect: function (req, res) {
    var proyect = new Proyect();
    var params = req.body;

    proyect.name = params.name;
    proyect.des = params.des;
    proyect.cat = params.cat;
    proyect.year = params.year;
    proyect.langs = params.langs;
    proyect.img = null;

    proyect.save((err, proyectStored) => {
      if (err) return err.status(500).send({ message: "Error to save" });
      if (!proyectStored)
        return res.status(404).send({ message: "Dont saved data error :(" });

      return res.status(200).send({ proyect: proyectStored });
    });
  },
  getProyect: function (req, res) {
    var projectId = req.params.id;

    if (projectId == null)
      return res.status(404).send({ message: "Proyect do not exist" });

    Proyect.findById(projectId, (err, proyect) => {
      if (err) return res.status(500).send({ message: "Error" });
      if (!proyect)
        return res.status(404).send({ message: "Proyect do not exist" });

      return res.status(200).send({ proyect });
    });
  },
};

module.exports = controller;
