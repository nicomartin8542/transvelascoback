const Inscripciones = require("../models/Inscripciones");

//Controller para crear un usuario
exports.altaInscripcion = async (req, res) => {
  const inscripciones = new Inscripciones(req.body);

  try {
    await inscripciones.save();
    res.status(200).json({ inscripciones });
  } catch (error) {
    res.status(500).json({ error: "No se pudo completar la inscripcion!" });
  }
};

exports.getAllInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripciones.find({});
    res.status(200).json({ inscripciones });
  } catch (error) {
    res.status(500).json({ error: "No se pudo acceder a los datos! " });
  }
};
