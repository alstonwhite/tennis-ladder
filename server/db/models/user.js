const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM("user", "admin"),
    defaultValue: "user",
  },
  bio: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  hometown: {
    type: Sequelize.STRING,
  },
  heightIns: {
    type: Sequelize.INTEGER,
  },
  weightLbs: {
    type: Sequelize.INTEGER,
  },
  handedness: {
    type: Sequelize.ENUM("left", "right"),
  },
});

module.exports = User;
