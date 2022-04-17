const db = require("./db");

const User = require("./models/User");
const Ladder = require("./models/Ladder");
const Match = require("./models/Match");
const User_Ladder = require("./models/User_Ladder");

// User:Ladder M:M
User.belongsToMany(Ladder, { through: User_Ladder });
Ladder.belongsToMany(User, { through: User_Ladder });
// Match:User 1:M x2
Match.belongsTo(User, {
  as: "winner",
  foreignKey: "winnerId",
});
Match.belongsTo(User, {
  as: "loser",
  foreignKey: "loserId",
});
User.hasMany(Match, {
  as: "wonMatches",
  foreignKey: "winnerId",
});
User.hasMany(Match, {
  as: "lostMatches",
  foreignKey: "loserId",
});
// Match:Ladder M:1
Match.belongsTo(Ladder);
Ladder.hasMany(Match);

module.exports = {
  db,
  models: {
    User,
    Ladder,
    Match,
    User_Ladder,
  },
};
