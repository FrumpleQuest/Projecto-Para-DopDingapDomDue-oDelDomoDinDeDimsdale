const express = require("express");
//const { useParams } = require("react-router-dom");
const router = express.Router();

const { User } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const client = await User.findOne({
      where: { id: req.params.id, type: "Client" },
      attributes: ["id", "name", "type"],
    });
    res.send(client);
  } catch (error) {
    res.status(400).send(error);
  }
});

//falta get con email

router.get("/email/:email", async (req, res) => {
  try {
    const client = await User.findOne({
      where: { email: req.params.email, type: "Client" },
      attributes: ["id", "name", "type"],
    });
    res.send(client);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
