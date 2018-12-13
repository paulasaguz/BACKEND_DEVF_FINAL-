"use strict";

var Comida = require("../models/modelComida.js");
const controller = {
  home: (req, res) => {
    return res.send("ya estamos en la ruta home ");
  }, //REGRESA TODAS LAS COMIDAS
  getComidas: (req, res) => {
    Comida.find({})
      .exec()
      .then(data => {
        return res.status(200).send({ res: data });
      })
      .catch(error => {
        return res.status(404).send({ error: "la cagaste" });
      });
  },
  registrarComidas: (req, res) => {
    let json = req.body;
    const nuevaReceta = Comida(json);
    nuevaReceta.save((error, receta) => {
      if (error) {
        return res
          .status(404)
          .send({ mensaje: "hay un problema al agregar el platillo" });
      }
      return res.status(200).send({ data: receta });
    });
  }
};

module.exports = controller;
