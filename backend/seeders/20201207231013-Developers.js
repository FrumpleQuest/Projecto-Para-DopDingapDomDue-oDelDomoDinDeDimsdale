'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let Seed = [];
    Seed.push({
      name: "Aureliano Buendia",
      email: "Aurelio@buendia.com",
      prevProjects: "Ninguno, claramente",
      tools: "Java, supongo",
      comments: "Soy muy buen programador amigo",
      isFreelancer: true,
    });
    Seed.push({
      name: "Ismael Cruz",
      email: "Ismael.Cruz@sansano.usm.cl",
      prevProjects: "Entrega 4 del proyecto de AyDs",
      tools: "React Bootstrap, Javascript, Banana",
      comments: "Espero hacer una labor de calidad",
      isFreelancer: true,
    });
    return queryInterface.bulkInsert("Developers",Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Developers", null, {});
  }
};
