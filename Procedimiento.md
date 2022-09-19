# Procedimiento

link: 
https://augdiaugus.gitbook.io/recoleccion-de-notas-publicas/escuela-de-javascript/curso-profesional-de-javascript


1. se inicia npm -init -y, 
2. se configura el package.json

{
  "name": "professional_js",
  "version": "1.0.0",
  "description": "Proyecto del curso profesional de JavaScript de la escuela de platzi",
  "license": "MIT",
  "author": "Elvis Ronald Cruz Chullo <elviscruz45@gmail.com>",
  "keywords": ["platzi"],
  "scripts": {},
  "devDependencies": {}
}

3. se instala en entorno de desarrollo live server asi:  npm i -D live-server
4. se crea el archivo package-lock.json y mode_modules
5. se agrega script en el package.json
  "scripts": {
    "start":"live-server"},

6. Para usarlo asi: npm start