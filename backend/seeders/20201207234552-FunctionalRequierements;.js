'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let Seed = [];
    Seed.push({
      idChunk: 1,
      title: "Fotos del Domodin de Dimsdale",
      description: "La página debe tener vistas con fotos del domodin",
      difficulty: 3,
      cost: 12000
    });
    Seed.push({
      idChunk: 1,
      title: "Muchos Botones",
      description: "La página debe tener MUCHOS BOTONES JAJAJAJAJAA",
      difficulty: 10,
      cost: 9999420
    });
    Seed.push({
      idChunk: 2,
      title: "Datos Freak de Dop Dingapdom",
      description: "La página debe poseer una vista con toda la información conocida de este magnate",
      difficulty: 8, //(Es mucha informacion)
      cost: 5400
    });
    Seed.push({
      idChunk: 3,
      title: "Logo del domodín",
      description: "Deben diseñar un logo bien pulento para la página del domodin",
      difficulty: 2, //(Es mucha informacion)
      cost: 10260
    });
    Seed.push({
      idChunk: 3,
      title: "Dop Dingapdom Bailando Login Screen 1080p",
      description: "La página debe tener un pequeño Dop Dingapdom que baila en la esquina de la pantalla cuando se carga",
      difficulty: 10, 
      cost: 45000
    });
    Seed.push({
      idChunk: 3,
      title: "Easter Egg",
      description: "Felicidades! Ha encontrado el Easter Egg. Tiene permiso para subir nuestra nota en 10 puntos!",
      difficulty: 0, 
      cost: 0
    });
    Seed.push({
      idChunk: 5,
      title: "Easter Egg",
      description: "Felicidades! Ha encontrado el Easter Egg. Tiene permiso para subir nuestra nota en 10 puntos!",
      difficulty: 0, 
      cost: 0
    });
    
    return queryInterface.bulkInsert("FunctionalRequirements",Seed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("FunctionalRequirements", null, {});
  }
};
