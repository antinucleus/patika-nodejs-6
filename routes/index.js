const fs = require('fs');

let modules = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    if (file.endsWith('.js')) {
      const fileName = file.split('.')[0];

      modules[fileName] = require(`./${fileName}`)[fileName];
    }
  });

module.exports = modules;
