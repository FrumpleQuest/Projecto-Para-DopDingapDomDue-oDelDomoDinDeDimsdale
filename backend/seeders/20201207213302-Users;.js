'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let Seed = [];
    Seed.push({
      name: "Dop Dingapdom",
      email: "DopDingapdom@DomodinDeDimsdale.dom",
      pass: "$2b$10$eGTPAW7an6FoEJYAUZCb/efrG4L0t2.IlrP8Om92iC1YSICy1Hq7.", //12345
      type: "Client",
    });
    Seed.push({
      name: "Mister Beroiza",
      email: "Beroiza@perestroika.cl",
      pass: "$2b$10$ifmL8ydbFTIgt8Rwj1FJXuSubhpqY4JRT07HmDzeAvCLEaBYWEDYu", //tftgamer
      type: "ProjectManager",
    });
    Seed.push({
      name: "LosTeamTitans",
      email: "LosTeamTitans@gmail.com",
      pass: "$2b$10$eGTPAW7an6FoEJYAUZCb/efrG4L0t2.IlrP8Om92iC1YSICy1Hq7.", //12345
      type: "Administrator",
    });
    Seed.push({
      name: "Aureliano Buendia",
      email: "Aurelio@buendia.com",
      pass: "$2b$10$WZkFqSvsySM0QdtrbpLESuH0Mv0Hzi8VAyhNFn1BVsMXpq1dSrZ76", //100años
      type: "Developer",
    });
    Seed.push({
      name: "Ismael Cruz",
      email: "Ismael.Cruz@sansano.usm.cl",
      pass: "$2b$10$eGTPAW7an6FoEJYAUZCb/efrG4L0t2.IlrP8Om92iC1YSICy1Hq7.", //12345
      type: "Developer",
    });
    return queryInterface.bulkInsert("Users",Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
