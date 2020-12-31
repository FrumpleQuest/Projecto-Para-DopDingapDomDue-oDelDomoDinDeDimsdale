const express = require("express");
const router = express.Router();
const { Topic } = require("../models");

// Retornar todos los topics

router.post("/create", async (req, res) => {
  try {
    const genTopic = await Topic.create(req.body);
    res.send(genTopic);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/:cat", async (req, res) => {
  try {
    const catTopics = await Topic.findAll({where: {category: req.params.cat}});
    res.send(catTopics);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const allTopics = await Topic.findAll();
    res.send(allTopics);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/cat/:id", async (req, res) => {
  try {
    const oneTopic = await Topic.findOne({
      where: { id: req.params.id },
    });
    res.send(oneTopic);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});




module.exports = router;