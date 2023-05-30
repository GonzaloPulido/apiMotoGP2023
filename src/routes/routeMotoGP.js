const express = require("express");
const riderMotoGP = require("../models/modelMotoGP");
const router = express.Router();

//Obtener todos los pilotos
router.get("/ridersMotoGP", async (req, res) => {
  riderMotoGP
    .find()
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

//Obtener solo un piloto
router.get("/ridersMotoGP/:id", (req, res) => {
  const { id } = req.params;
  riderMotoGP
    .findById(id)
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

//Crear piloto
router.post("/ridersMotoGP", async (req, res) => {
  const rider = new riderMotoGP(req.body);
  const checkName = await riderMotoGP.findOne({
    name: rider.name,
  });
  if (!checkName) {
    await rider.save();
    res.json(rider);
  } else {
    res.send("Este piloto ya existe.");
  }
});

//Actualizar piloto
router.put("/ridersMotoGP/:id", (req, res) => {
  const { id } = req.params;
  const { name, country, dateOfBirth, team, bike, height, poles, worldChampionships, image, points } = req.body;
  riderMotoGP
    .updateOne({ _id: id }, { $set: { name, country, dateOfBirth, team, bike, height, poles, worldChampionships, image, points } })
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});
//Elimina un solo piloto
router.delete("/ridersMotoGP/:id", (req, res) => {
  const { id } = req.params;
  riderMotoGP
    .deleteOne({ _id: id })
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

module.exports = router;