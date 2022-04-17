const Sequelize = require("sequelize");
const db = require("../db");

const User_Ladder = db.define("User_Ladder", {
  ranking: {
    type: Sequelize.INTEGER,
  },
  prevRanking: {
    type: Sequelize.INTEGER,
  },
});

module.exports = User_Ladder;
