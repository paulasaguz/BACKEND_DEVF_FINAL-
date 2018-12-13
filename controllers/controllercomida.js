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
    let _id = req.params.id;
    let _image = req.files.image;
    let path_image = _image.path;
    console.log(path_image);
    var pathtemp = path_image.split('./');
    let nombreimg = pathtemp[1];
    return res.send({ message: nombreimg });
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
