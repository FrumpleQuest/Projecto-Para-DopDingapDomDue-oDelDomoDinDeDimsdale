const express = require("express");
const router = express.Router();
const { Developer, User } = require("../models");

// Retornar todos los developers
router.get("/all", async (req, res) => {
  try {
    const allDevelopers = await Developer.findAll();
    res.send(allDevelopers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/user/all", async (req, res) => {
  try {
    const allDevelopers = await User.findAll({where: {type: "Developer" }});
    res.send(allDevelopers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Retornar el developer con la id entregada
router.get("/:id", async (req, res) => {
  try {
    const allDevelopers = await Developer.findOne({ where: req.params });
    res.send(allDevelopers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/by_mail/:email", async (req, res) => {
  try {
    const dev = await Developer.findOne({ where: req.params });
    res.send(dev);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Actualizar información de un developer
router.post("/update", async (req, res) => {
  try {
    const dev = await Developer.findOne({ where: { id: req.body.id } });
    const user = await User.findOne({ where: { email: dev.email } });

    if (req.body.hasOwnProperty("email")) {
      dev.email = req.body.email;
      user.email = req.body.email;
    }
    if (req.body.hasOwnProperty("prevProjects"))
      dev.prevProjects = req.body.prevProjects;
    if (req.body.hasOwnProperty("tools")) dev.tools = req.body.tools;
    if (req.body.hasOwnProperty("comments")) dev.comments = req.body.comments;
    if (req.body.hasOwnProperty("isFreelancer"))
      dev.isFreelancer = req.body.isFreelancer;
    if (req.body.hasOwnProperty("ratings")) dev.ratings = req.body.ratings;
    if (req.body.hasOwnProperty("pmComments"))
      dev.pmComments = req.body.pmComments;
    if (req.body.hasOwnProperty("name")) user.name = req.body.name;
    await dev.save();
    await user.save();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
