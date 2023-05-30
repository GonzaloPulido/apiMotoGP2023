const express = require("express");
const riderMoto3 = require("../models/modelMoto3");
const router = express.Router();

//Obtener todos los pilotos
router.get("/ridersMoto3", async (req, res) => {
  riderMoto3
    .find()
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

//Obtener solo un piloto
router.get("/ridersMoto3/:id", (req, res) => {
  const { id } = req.params;
  riderMoto3
    .findById(id)
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

//Crear piloto
router.post("/ridersMoto3", async (req, res) => {
  const rider = new riderMoto3(req.body);
  const checkName = await riderMoto3.findOne({
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
router.put("/ridersMoto3/:id", (req, res) => {
  const { id } = req.params;
  const { name, country, dateOfBirth, team, bike, height, poles, worldChampionships, image, points } = req.body;
  riderMoto3
    .updateOne({ _id: id }, { $set: { name, country, dateOfBirth, team, bike, height, poles, worldChampionships, image, points } })
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});
//Elimina un solo piloto
router.delete("/ridersMoto3/:id", (req, res) => {
  const { id } = req.params;
  riderMoto3
    .deleteOne({ _id: id })
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

module.exports = router;