const express = require("express");
const router = express.Router();
const { Reply } = require("../models");

router.get("/all", async (req, res) => {
  try {
    const replies = await Reply.findAll();
    res.send(replies);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Retornar todos los Replies de un topic particular
router.get("/:id", async (req, res) => {
  try {
    const replies = await Reply.findAll({
      where: { idTopic: req.params.id },
    });
    res.send(replies);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const genReply = await Reply.create(req.body);
    res.send(genReply);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
