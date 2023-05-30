const express = require("express");
const riderMoto2 = require("../models/modelMoto2");
const router = express.Router();

//Obtener todos los pilotos
router.get("/ridersMoto2", async (req, res) => {
  riderMoto2
    .find()
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

//Obtener solo un piloto
router.get("/ridersMoto2/:id", (req, res) => {
  const { id } = req.params;
  riderMoto2
    .findById(id)
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

//Crear piloto
router.post("/ridersMoto2", async (req, res) => {
  const rider = new riderMoto2(req.body);
  const checkName = await riderMoto2.findOne({
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
router.put("/ridersMoto2/:id", (req, res) => {
  const { id } = req.params;
  const { name, country, dateOfBirth, team, bike, height, poles, worldChampionships, image, points } = req.body;
  riderMoto2
    .updateOne({ _id: id }, { $set: { name, country, dateOfBirth, team, bike, height, poles, worldChampionships, image, points } })
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});
//Elimina un solo piloto
router.delete("/ridersMoto2/:id", (req, res) => {
  const { id } = req.params;
  riderMoto2
    .deleteOne({ _id: id })
    .then((rider) => res.json(rider))
    .catch((err) => res.json(err));
});

module.exports = router;