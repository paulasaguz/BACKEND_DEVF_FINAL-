var express = require("express");
var multipart = require("connect-multiparty"); //con connect multiparty podemos procesar las imagenes
var ContorllerComida = require("../controllers/controllercomida");

var router = express.Router();

router.get("/", ContorllerComida.home);
router.get("/comidas", ContorllerComida.getComidas);
router.post("/comidas", ContorllerComida.registrarComidas);
module.exports = router;
