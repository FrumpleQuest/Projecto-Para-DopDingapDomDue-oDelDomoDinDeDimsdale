Instrucciones de Instalación:

1) Clonar el repositorio
2) Abrir 2 terminales, una será para el backend y otra para el frontend.
3) En la carpeta master, correr 'npm install' seguido de 'npm start'.
4) En la carpeta backend, correr:
    i) 'npm install'
    ii) 'npx sequelize db:create'
    iii) 'npx sequelize db:migrate'
    iv) 'npx sequelize db:seed:all'
    v) 'npm start'

Tras seguir estos pasos, debiese crearse una base de datos llamda 'AyDsProject', con
la estructura debida, y llena de valores creados por el seed.

Tambien debiese abrirse su navegador en 'localhost:3000' (La base de datos esta hosteada en localhost:4000).


