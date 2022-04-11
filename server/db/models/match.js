const Sequelize = require("sequelize");
const db = require("../db");

const Match = db.define("match", {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  date: {
    type: Sequelize.DATE,
  },
  setsPlayed: {
    type: Sequelize.INTEGER,
  },
  winnerScoreSet1: {
    type: Sequelize.INTEGER,
  },
  loserScoreSet1: {
    type: Sequelize.INTEGER,
  },
  winnerScoreSet2: {
    type: Sequelize.INTEGER,
  },
  loserScoreSet2: {
    type: Sequelize.INTEGER,
  },
  winnerScoreSet3: {
    type: Sequelize.INTEGER,
  },
  loserScoreSet3: {
    type: Sequelize.INTEGER,
  },
  winnerScoreTiebreak: {
    type: Sequelize.INTEGER,
  },
  loserScoreTiebreak: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Match;
