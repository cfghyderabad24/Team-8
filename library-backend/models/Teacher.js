const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Teacher = db.define('teachers', {
  teacherName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  schoolID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Teacher;
