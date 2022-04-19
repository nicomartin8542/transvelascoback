const express = require("express");
const app = express.Router();
const inscripcionesController = require("../controllers/inscripcionesController");
const { altaInscripcion, getAllInscripciones } = inscripcionesController;

//Alta inscripciones
app.post("/", altaInscripcion);

//Get all inscripciones
app.get("/", getAllInscripciones);

module.exports = app;
