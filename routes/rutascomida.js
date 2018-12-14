var express = require("express");
var multipart = require("connect-multiparty"); //con connect multiparty podemos procesar las imagenes
var ControllerComida = require("../controllers/controllercomida");

var router = express.Router();

var multipartMiddleware = multipart({ uploadDir: "./archivos" }); //aqui estamos diciendo en donde guarde la imagen

router.get("/", ControllerComida.home);
router.get("/comidas", ControllerComida.getComidas);
router.post("/comidas", ControllerComida.registrarComidas);
router.post("/guardarImagenComida/:id",multipartMiddleware,ControllerComida.guardarImagen);
router.get("/getImagenComida/:nomimage", ControllerComida.getImagen);
router.delete("/comidas/:id", ControllerComida.eliminarComida);
module.exports = router;
