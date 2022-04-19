const Inscripciones = require("../models/Inscripciones");

//Controller para crear un usuario
exports.altaInscripcion = async (req, res) => {
  const inscripciones = new Inscripciones(req.body);
  inscripciones.save();
  res.json({ inscripciones });
};

exports.getAllInscripciones = async (req, res) => {
  const inscripciones = await Inscripciones.find({});

  res.json({ inscripciones });
};
