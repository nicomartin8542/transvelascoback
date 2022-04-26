const Inscripciones = require("../models/Inscripciones");

//Controller para crear un usuario
exports.altaInscripcion = async (req, res) => {
  const inscripciones = new Inscripciones(req.body);
  const keys = [
    "nombre",
    "apellido",
    "marca",
    "modelo",
    "provincia",
    "categoria",
    "obraSocial",
    "cumpleaños",
  ];

  //Valido que el body venga correcto
  let flag;

  Object.keys(req.body).forEach((key) => {
    if (!keys.some((k) => k === key)) flag = true;
  });

  if (flag) {
    res
      .status(409)
      .json({ error: "Los campos del body son incorrectos! ", body: keys });
    return;
  }

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
