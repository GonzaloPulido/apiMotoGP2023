const express = require("express");
const teamMotoGP = require("../models/modelTeamsMotoGP");
const router = express.Router();

//Obtener todos los equipos
router.get("/teamsMotoGP", async (req, res) => {
  teamMotoGP
    .find()
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

//Obtener solo un equipo
router.get("/teamsMotoGP/:id", (req, res) => {
  const { id } = req.params;
  teamMotoGP
    .findById(id)
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

//Crear equipo
router.post("/teamsMotoGP", async (req, res) => {
  const team = new teamMotoGP(req.body);
  const checkName = await teamMotoGP.findOne({
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
router.put("/teamsMotoGP/:id", (req, res) => {
  const { id } = req.params;
  const { name, piloto1, piloto2, piloto1Id, piloto2Id, image } = req.body;
  teamMotoGP
    .updateOne({ _id: id }, { $set: { name, piloto1, piloto2, piloto1Id, piloto2Id, image } })
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});
//Elimina un solo equipo
router.delete("/teamsMotoGP/:id", (req, res) => {
  const { id } = req.params;
  teamMotoGP
    .deleteOne({ _id: id })
    .then((team) => res.json(team))
    .catch((err) => res.json(err));
});

module.exports = router;