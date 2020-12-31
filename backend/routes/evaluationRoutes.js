const express = require("express");
const router = express.Router();
const { Evaluation } = require("../models");
var sequelize = require('sequelize');


// Retornar el promedio de los puntajes de un desarrollar, segun email.
router.get("/sum/:email", async (req, res) => {
  try {
    const allEval = await Evaluation.findOne({
      where: req.params,
      attributes: ['email',[sequelize.fn('ROUND', sequelize.fn('avg', sequelize.col('score')),0), 'total']],
      group: 'email',
    });
    res.send(allEval);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Retornar todas las evaluaciones de un dev segun email.

router.get("/:email", async (req, res) => {
  try {
    const allEval = await Evaluation.findAll({where: req.params});
    res.send(allEval);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/create", async (req,res) => {
  try {
    //Aqui se va a crear el usuario
    const newEval = await Evaluation.create({
        email: req.body.email,
        score: req.body.score,
        comment: req.body.comment,
        creationDate: req.body.creationDate
    });
    return res.send(newEval);
    } catch (error) {
        return res.status(400).send(error);
    }
});


module.exports = router;
