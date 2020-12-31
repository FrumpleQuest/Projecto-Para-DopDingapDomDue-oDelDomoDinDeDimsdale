const express = require("express");
const router = express.Router();

const { FunctionalRequirement } = require("../models");

router.get("/by_chunk/:idChunk", async (req, res) => {
  try {
    const frs = await FunctionalRequirement.findAll({ where: req.params });
    res.send(frs);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
