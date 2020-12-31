const express = require("express");
const router = express.Router();

const { ChunkComment } = require("../models");

router.get("/:idChunk", async (req, res) => {
  try {
    const comments = await ChunkComment.findAll({ where: req.params });
    res.send(comments);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const comment = await ChunkComment.create(req.body);
    res.send(comment);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
