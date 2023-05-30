const express = require("express");
const circuitMotoGP = require("../models/modelCircuits");
const router = express.Router();

//Obtener todos los circuitos
router.get("/circuitsMotoGP", async (req, res) => {
  circuitMotoGP
    .find()
    .then((circuit) => res.json(circuit))
    .catch((err) => res.json(err));
});

//Obtener solo un circuito
router.get("/circuitsMotoGP/:id", (req, res) => {
  const { id } = req.params;
  circuitMotoGP
    .findById(id)
    .then((circuit) => res.json(circuit))
    .catch((err) => res.json(err));
});

//Crear circuito
router.post("/circuitsMotoGP", async (req, res) => {
  const circuit = new circuitMotoGP(req.body);
  const checkName = await circuitMotoGP.findOne({
    circuit: circuit.circuit,
  });
  if (!checkName) {
    await circuit.save();
    res.json(circuit);
  } else {
    res.send("Este circuito ya existe.");
  }
});

//Actualizar circuito
router.put("/circuitsMotoGP/:id", (req, res) => {
  const { id } = req.params;
  const { circuit, country, weekend, length, leftCorners, rightCorners, image, backImage, start, finish, favBool } = req.body;
  circuitMotoGP
    .updateOne({ _id: id }, { $set: { circuit, country, weekend, length, leftCorners, rightCorners, image, backImage, start, finish, favBool } })
    .then((circuit) => res.json(circuit))
    .catch((err) => res.json(err));
});
//Elimina un solo circuito
router.delete("/circuitsMotoGP/:id", (req, res) => {
  const { id } = req.params;
  circuitMotoGP
    .deleteOne({ _id: id })
    .then((circuit) => res.json(circuit))
    .catch((err) => res.json(err));
});

module.exports = router;