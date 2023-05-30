const express = require("express");
const teamMoto3 = require("../models/modelTeamsMoto3");
const router = express.Router();

//Obtener todos los equipos
router.get("/teamsMoto3", async (req, res) => {
  teamMoto3
    .find()
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

//Obtener solo un equipo
router.get("/teamsMoto3/:id", (req, res) => {
  const { id } = req.params;
  teamMoto3
    .findById(id)
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

//Crear equipo
router.post("/teamsMoto3", async (req, res) => {
  const team = new teamMoto3(req.body);
  const checkName = await teamMoto3.findOne({
    name: team.name,
  });
  if (!checkName) {
    await team.save();
    res.json(team);
  } else {
    res.send("Este equipo ya existe.");
  }
});

//Actualizar equipo
router.put("/teamsMoto3/:id", (req, res) => {
  const { id } = req.params;
  const { name, piloto1, piloto2, image } = req.body;
  teamMoto3
    .updateOne({ _id: id }, { $set: { name, piloto1, piloto2, image } })
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});
//Elimina un solo equipo
router.delete("/teamsMoto3/:id", (req, res) => {
  const { id } = req.params;
  teamMoto3
    .deleteOne({ _id: id })
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

module.exports = router;