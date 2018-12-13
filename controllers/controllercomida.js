"use strict";
var fs = require("fs");
var path = require("path"); //con esto cargamos rutas fisicas de nuestro sistemas de archivos

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
  },
  guardarImagen: (req, res) => {
    var idimage = req.params.id;

    // if (req.files.image) {
    //   var pathfull = req.files.image.path;
    //   var pathtemp = pathfull.split("\\");
    //   var namefile = pathtemp[1];
    //   var exttemp = namefile.split(".");
    //   var extfile = exttemp[1];
    //   if (
    //     extfile == "jpg" ||
    //     extfile == "jpeg" ||
    //     extfile == "png" ||
    //     extfile == "gif"
    //   ) {
    //     Comida.findByIdAndUpdate(
    //       idimage,
    //       { image: namefile },
    //       { new: true },
    //       (err, projectUpdated) => {
    //         if (err)
    //           return res
    //             .status(500)
    //             .send({ message: "ERROR AL SUBIR EL ARCHIVO" });
    //         if (!projectUpdated)
    //           return res.status(404).send({ message: "IMAGEN NO ENCONTRADA" });
    //         return res
    //           .status(200)
    //           .send({ message: "IMAGEN CARGADA DE MANERA EXITOSA" });
    //       }
    //     );
    //   } else {
    //     return res
    //       .status(500)
    //       .send({ error: "la extension de la imagen es incorrecta" });
    //   }
    // }
    return res.send(message:"estamos entrando a la ruta");
  },
  getImagen: function(req, res) {
    var archivoimg = req.params.nomimage;

    var pathfile = "./archivos/" + archivoimg;

    fs.access(pathfile, fs.F_OK, err => {
      if (err) {
        return res.status(500).send({ message: "LA IMAGEN NO EXISTE" });
      } else {
        return res.sendFile(path.resolve(pathfile));
      }
    });
  }
};

module.exports = controller;
