const express = require("express");
const userSchema = require("../models/modelUsers");
const router = express.Router();

//Obtener todos los usuarios
router.get("/users", async (req, res) => {
  userSchema
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

//Obtener solo un usuario
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

//Crear usuario
router.post("/users", async (req, res) => {
  const user = new userSchema(req.body);
  const checkEmail = await userSchema.findOne({
    email: user.email,
  });
  const checkUsername = await userSchema.findOne({
    username: user.username,
  });
  if (!checkUsername || !checkEmail) {
    await user.save();
    res.json(user);
  } else {
    res.send("Este nombre ya existe.");
  }
});

//Actualizar usuario
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { firstname, surname, age } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { firstname, surname, age } })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
//Elimina un solo usuario
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

module.exports = router;