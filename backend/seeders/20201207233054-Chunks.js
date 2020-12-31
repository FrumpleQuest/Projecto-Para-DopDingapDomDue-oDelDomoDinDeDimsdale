"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let Seed = [];
    Seed.push({
      idProject: 1,
      emailDev: "Aurelio@buendia.com",
      startingDate: new Date(),
      deadline: new Date(),
      state: false,
    });
    Seed.push({
      idProject: 1,
      emailDev: "Ismael.Cruz@sansano.usm.cl",
      startingDate: new Date(),
      deadline: new Date(),
      state: false,
    });
    Seed.push({
      idProject: 2,
      emailDev: "Ismael.Cruz@sansano.usm.cl",
      startingDate: new Date(),
      deadline: new Date(),
      state: false,
    });
    Seed.push({
      idProject: 2,
      emailDev: "Aurelio@buendia.com",
      startingDate: new Date(),
      deadline: new Date(),
      state: false,
    });
    Seed.push({
      idProject: 1,
      emailDev: "Ismael.Cruz@sansano.usm.cl",
      startingDate: new Date(),
      deadline: new Date(),
      state: false,
    });
    return queryInterface.bulkInsert("Chunks", Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Chunks", null, {});
  },
};
