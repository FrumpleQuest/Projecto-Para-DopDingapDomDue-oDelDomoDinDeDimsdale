'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    let Seed = [];
    Seed.push({
      idTopic: 1,
      creatorName: "LosTeamTitans",
      creatorEmail: "LosTeamTitans@gmail.com",
      creatorType: "Administrator",
      body: "profesor deje de correr, debera enfrentarnos tarde o temprano.",
      creationDate: new Date(),
    });
    Seed.push({
      idTopic: 2,
      creatorName: "LosTeamTitans",
      creatorEmail: "LosTeamTitans@gmail.com",
      creatorType: "Administrator",
      body: "Que gran plan!",
      creationDate: new Date(),
    });
    Seed.push({
      idTopic: 3,
      creatorName: "LosTeamTitans",
      creatorEmail: "LosTeamTitans@gmail.com",
      creatorType: "Administrator",
      body: "AAAAAHHHHH",
      creationDate: new Date(),
    });
    Seed.push({
      idTopic: 1,
      creatorName: "Aureliano Buendia",
      creatorEmail: "Aurelio@buendia.com",
      creatorType: "Developer",
      body: "Dejen de diztraerme, eztoy intentando dezarollar una aplicazión!",
      creationDate: new Date(),
    });
    return queryInterface.bulkInsert("Replies",Seed);
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Replies", null, {});
  }
};
