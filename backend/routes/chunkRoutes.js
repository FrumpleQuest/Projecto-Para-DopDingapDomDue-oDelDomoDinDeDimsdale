const express = require("express");
const router = express.Router();

const { Chunk } = require("../models");

router.get("/by_project/:idProject", async (req, res) => {
  try {
    const chunks = await Chunk.findAll({ where: req.params });
    res.send(chunks);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/by_project/only_complete/:idProject", async (req, res) => {
  try {
    const chunks = await Chunk.findAll({ where: {idProject: req.params.idProject, state: true} });
    res.send(chunks);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/by_project/:idProject/by_dev/:emailDev", async (req, res) => {
  try {
    const chunks = await Chunk.findAll({ where: req.params });
    res.send(chunks);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const chunkData = req.body;
    const genChunk = await Chunk.build({
      emailDev: chunkData.emailDev,
      idProject: chunkData.idProject,
      startingDate: chunkData.startingDate,
      deadline: chunkData.deadline,
    });
    await genChunk.save();
    await Promise.all(
      chunkData.funcReqs.map(
        async (fr) =>
          await genChunk.createFunctionalRequirement({
            ...fr,
            idChunk: genChunk.id,
          })
      )
    );
    res.send(genChunk);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    const chunkData = req.body;
    let chunk = await Chunk.findOne({ where: { id: chunkData.id } });
    if (chunkData.hasOwnProperty("emailDev"))
      chunk.emailDev = chunkData.emailDev;
    if (chunkData.hasOwnProperty("state")) chunk.state = chunkData.state;
    console.log(chunkData.state);
    await chunk.save();
    res.send(chunk);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
