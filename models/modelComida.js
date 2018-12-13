var mongoose = require("mongoose");

var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

var ComidaSchema = new Schema({
 
  nombredelplatillo: String,
  costo: Number,
  categoria: String,
  ingredientes : [String],
  image: String
});

module.exports = mongoose.model("Comida", ComidaSchema);
