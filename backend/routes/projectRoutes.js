const express = require("express");
const router = express.Router();
const { Project, Chunk } = require("../models");

// Retornar todos los proyectos
router.get("/all", async (req, res) => {
  try {
    const allProjects = await Project.findAll();
    res.send(allProjects);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//Retornar el proyecto con la id entregada
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findOne({ where: req.params });
    res.send(project);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Ruta para todos los projectos de un dev, buscando por mail.
router.get("/by_dev/by_email/:email", async (req, res) => {
  try {
    const devChunks = await Chunk.findAll({
      where: { emailDev: req.params.email },
    });
    const _devProjects = await Promise.all(
      devChunks.map(async (chunk) => await chunk.getProject())
    );
    const devProjects = [];
    const ids = [];
    _devProjects.forEach((project) => {
      if (!ids.includes(project.id)) {
        ids.push(project.id);
        devProjects.push(project);
      }
    });
    res.send(devProjects);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Retornar todos los proyectos en los que ha trabajado el desarrollador con la id
// entregada. De momento esto puede retornar proyectos duplicados
router.get("/by_dev/:id", async (req, res) => {
  try {
    const devChunks = await Chunk.findAll({
      where: { idDev: req.params.id },
    });
    const _devProjects = await Promise.all(
      devChunks.map(async (chunk) => await chunk.getProject())
    );
    const devProjects = [];
    const ids = [];
    _devProjects.forEach((project) => {
      if (!ids.includes(project.id)) {
        ids.push(project.id);
        devProjects.push(project);
      }
    });
    res.send(devProjects);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/by_pm/:managerEmail", async (req, res) => {
  try {
    const projects = await Project.findAll({ where: req.params });
    res.send(projects);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/by_client/:clientEmail", async (req, res) => {
  try {
    const projects = await Project.findAll({ where: req.params });
    res.send(projects);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const genProject = await Project.create(req.body);
    res.send(genProject);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//editar un proyecto activo

router.post("/edit", async (req, res) => {
  try {
    const project = await Project.findOne({ where: { id: req.body.id } });
    if (req.body.hasOwnProperty("clientEmail"))
      project.clientEmail = req.body.clientEmail;
    if (req.body.hasOwnProperty("managerEmail"))
      project.managerEmail = req.body.managerEmail;
    if (req.body.hasOwnProperty("startingDate"))
      project.startingDate = req.body.startingDate;
    if (req.body.hasOwnProperty("deadline"))
      project.deadline = req.body.deadline;
    if (req.body.hasOwnProperty("description"))
      project.description = req.body.description;
    await project.save();
    res.send(project);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
