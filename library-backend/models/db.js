const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('library', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define models
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registrationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.ENUM('Available', 'Not Available'),
    defaultValue: 'Available',
  },
  issuedDate: {
    type: DataTypes.DATE,
  },
  dueDate: {
    type: DataTypes.DATE,
  },
});

module.exports = { sequelize, Student, Book };
