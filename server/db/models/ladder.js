const Sequelize = require("sequelize");
const db = require("../db");

const Ladder = db.define("ladder", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
});

module.exports = Ladder;
