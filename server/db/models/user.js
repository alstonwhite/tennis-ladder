const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM('user', 'admin'),
    defaultValue: 'user',
  },
});

module.exports = User;