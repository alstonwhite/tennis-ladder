const db = require("./db");

const User = require("./models/User");
const Ladder = require("./models/Ladder");
const Match = require("./models/Match");

// User:Ladder M:M
User.belongsToMany(Ladder, {through: "UserLadders"})
Ladder.belongsToMany(User, {through: "UserLadders"})
// Match:User 1:M x2
Match.belongsTo(User, {
  as: 'winner',
  foreignKey: 'winnerId'
})
Match.belongsTo(User, {
  as: 'loser',
  foreignKey: 'loserId'
})
User.hasMany(Match)
// Match:Ladder M:1
Match.belongsTo(Ladder)
Ladder.hasMany(Match)

module.exports = {
  db,
  models: {
    User,
    Ladder,
    Match
  },
};
