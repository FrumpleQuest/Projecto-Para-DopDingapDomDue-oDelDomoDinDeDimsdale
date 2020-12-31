const express = require("express");
const router = express.Router();
const { Developer, User } = require("../models");

//Retornar usuario por mail
router.get("/:email", async (req, res) => {
    try {
      const dev = await User.findOne({ where: req.params });
      res.send(dev);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });

module.exports = router;