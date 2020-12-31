'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let Seed = [];
    Seed.push({
      clientEmail: "DopDingapdom@DomodinDeDimsdale.dom",
      managerEmail: "Beroiza@perestroika.cl",
      startingDate: new Date(),
      deadline: new Date(),
      description: "Construir una página web para promocionar el Domodin de Dimsdale"
    });
    Seed.push({
      clientEmail: "DopDingapdom@DomodinDeDimsdale.dom",
      managerEmail: "Beroiza@perestroika.cl",
      startingDate: new Date(),
      deadline: new Date(),
      description: "Construir OTRA página web para promocionar el Domodin de Dimsdale :D (Disculpenos profesor, pero no queremos seguir utilizando nuestro escaso tiempo haciendo más seeds para entretenerlo, esto deberá ser suficiente.)"
    });
    return queryInterface.bulkInsert("Projects",Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects", null, {});
  }
};
