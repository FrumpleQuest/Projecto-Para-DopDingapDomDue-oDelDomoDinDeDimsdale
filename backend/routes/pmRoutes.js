const express = require("express");
const router = express.Router();

const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allManagers = await User.findAll({
      where: { type: "ProjectManager" },
      attributes: ["id", "name", "email"],
    });
    res.send(allManagers);
  } catch (error) {
    res.status(400).send("Se ha generado un error al hacer la request");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projectManager = await User.findOne({
      where: req.params,
      attributes: ["id", "name", "email"],
    });
    res.send(projectManager);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Falta get con email
router.get("/email/:email", async (req, res) => {
  try {
    const projectManager = await User.findOne({
      where: { email: req.params.email, type: "ProjectManager" },
      attributes: ["id", "name", "email"],
    });
    res.send(projectManager);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
