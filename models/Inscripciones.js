const mongoose = require("mongoose");

const InscripcionesSchema = mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
  },

  apellido: {
    type: String,
  },

  documento: {
    type: Number,
  },

  marca: {
    type: String,
  },

  modelo: {
    type: String,
  },

  provincia: {
    type: String,
  },

  categoria: {
    type: String,
  },

  obraSocial: {
    type: String,
  },

  cumpleaños: {
    type: Date,
  },
});

module.exports = mongoose.model("Inscripciones", InscripcionesSchema);
