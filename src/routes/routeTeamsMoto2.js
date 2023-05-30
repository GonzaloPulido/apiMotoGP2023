const express = require("express");
const teamMoto2 = require("../models/modelTeamsMoto2");
const router = express.Router();

//Obtener todos los equipos
router.get("/teamsMoto2", async (req, res) => {
  teamMoto2
    .find()
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

//Obtener solo un equipo
router.get("/teamsMoto2/:id", (req, res) => {
  const { id } = req.params;
  teamMoto2
    .findById(id)
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

//Crear equipo
router.post("/teamsMoto2", async (req, res) => {
  const team = new teamMoto2(req.body);
  const checkName = await teamMoto2.findOne({
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
router.put("/teamsMoto2/:id", (req, res) => {
  const { id } = req.params;
  const { name, piloto1, piloto2, image } = req.body;
  teamMoto2
    .updateOne({ _id: id }, { $set: { name, piloto1, piloto2, image } })
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});
//Elimina un solo equipo
router.delete("/teamsMoto2/:id", (req, res) => {
  const { id } = req.params;
  teamMoto2
    .deleteOne({ _id: id })
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

module.exports = router;