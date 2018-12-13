const express = require("express");
const bodyparser = require("body-parser");

var app = express();

var rutasc = require("./routes/rutascomida");

//CONFIGURACION DE MIDDLEWARES
//todo lo que llegue conviertelo a json
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api/comida/v1", rutasc);

module.exports = app;
