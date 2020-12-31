'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let Seed = [];
    Seed.push({
      creatorEmail: "Beroiza@perestroika.cl",
      creatorName: "Mister Beroiza",
      creatorType: "ProjectManager",
      category: "Request",
      title: "Dejen de molestarme, no juego TFT.",
      body: "Porfavor...",
      creationDate: new Date(),
    });
    Seed.push({
      creatorEmail: "LosTeamTitans@gmail.com",
      creatorName: "LosTeamTitans",
      creatorType: "Administrator",
      category: "Discussion",
      title: "Los pasos que debemos seguir para pasar el ramo:",
      body: "1) Sobornar al profesor 2) ??? 3) Profit",
      creationDate: new Date(),
    });
    Seed.push({
      creatorEmail: "Aurelio@buendia.com",
      creatorName: "Aureliano Buendia",
      creatorType: "Developer",
      category: "Alert",
      title: "EL PROYECTO SE FUE A LA CRESTA, SALVESE QUIEN PUEDA",
      body: "AAAAAHHHHHHHHHH!!!!!!!",
      creationDate: new Date(),
    });
    return queryInterface.bulkInsert("Topics",Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  }
};
