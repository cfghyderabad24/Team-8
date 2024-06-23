const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'root', 'vachi_46', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
