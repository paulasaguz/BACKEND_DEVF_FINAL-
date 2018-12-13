const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const urlmongo =
  "mongodb://rodrigoh00per:_rgrh00per@ds139920.mlab.com:39920/comidaproyectodevf";

// AQUI SOLO SE MANDA  A LLAMAR EL SERVIDOR DE MONGO Y EL DEL BACKEND

app.listen(PORT, () => {
  console.log(`se levanto el servidor en e puerto ${PORT}`);
});

mongoose.connect(
  urlmongo,
  { useNewUrlParser: true },
  () => {
    console.log("conectado a la base de datos con mongoo");
  }
);
