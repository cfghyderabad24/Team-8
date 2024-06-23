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

const Transaction = sequelize.define('Transaction', {
  transactionType: {
    type: DataTypes.ENUM('check-in', 'check-out'),
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 3,
    },
  },
  transactionDate: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

// Associations
Book.belongsTo(Student);
Transaction.belongsTo(Book);
Transaction.belongsTo(Student);

module.exports = { sequelize, Student, Book, Transaction };
