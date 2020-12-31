'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let Seed = [];
    Seed.push({
      email: "Aurelio@buendia.com",
      score: 60,
      comment: "Bastante bueno, aunque algo solitario.",
      creationDate: new Date()
    });
    Seed.push({
      email: "Aurelio@buendia.com",
      score: 0,
      comment: "Ni en 100 años será un buen desarrollador ",
      creationDate: new Date()
    });
    Seed.push({
      email: "Ismael.Cruz@sansano.usm.cl",
      score: 100,
      comment: "Este tipo es muy dedicado, merece todo mi respeto",
      creationDate: new Date()
    });
    Seed.push({
      email: "Ismael.Cruz@sansano.usm.cl",
      score: 95,
      comment: "Un absoluto genio",
      creationDate: new Date()
    });
    return queryInterface.bulkInsert("Evaluations",Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Evaluations", null, {});
  }
};
