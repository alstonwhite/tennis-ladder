const {
  db,
  models: { User, Ladder, Match },
} = require("../server/db");

const seed = async () => {
  await db.sync({ force: true }); // cleare db and matched models to tables
  console.log("Db synced with seed file");

  // Create users
  const userAlston = await User.create({
    firstName: "Alston",
    lastName: "White",
    country: "United States",
    handedness: "right",
  });
  const userNick = await User.create({ firstName: "Nick", lastName: "Izzard" });
  const userJackson = await User.create({
    firstName: "Jackson",
    lastName: "Doherty",
  });
  const userTrey = await User.create({ firstName: "Trey", lastName: "Gill" });
  const userSoupy = await User.create({
    firstName: "Soupy",
    lastName: "Jones",
    type: "admin",
  });
  // Create ladders
  const ladder1 = await Ladder.create({ name: "Ladder1" });
  const ladder2 = await Ladder.create({ name: "Ladder2" });
  // Assign users to ladders
  await ladder1.addUser(userAlston);
  await ladder1.addUser(userNick);
  await ladder1.addUser(userJackson);
  await ladder1.addUser(userTrey);
  await ladder2.addUser(userAlston);
  await ladder2.addUser(userSoupy);
  // Create matches
  const matchAlstonNick = await Match.create({
    completed: true,
    setsPlayed: 1,
  });
  const matchAlstonJackson = await Match.create({
    completed: true,
    setsPlayed: 2,
  });
  const matchAlstonTrey = await Match.create({
    completed: true,
    setsPlayed: 3,
  });
  const matchNickTrey = await Match.create();
  // Assign users to matches
  await matchAlstonNick.setWinner(userNick);
  await matchAlstonNick.setLoser(userAlston);
  await matchAlstonJackson.setWinner(userJackson);
  await matchAlstonJackson.setLoser(userAlston);
  await matchAlstonTrey.setWinner(userTrey);
  await matchAlstonTrey.setLoser(userAlston);
  await matchNickTrey.setWinner(userNick);
  await matchNickTrey.setLoser(userTrey);
  // Assign matches to ladders
  await ladder1.addMatch(matchAlstonNick);
  await ladder1.addMatch(matchAlstonJackson);
  await ladder1.addMatch(matchAlstonTrey);
  await ladder1.addMatch(matchNickTrey);

};

const runSeed = async () => {
  console.log("Seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("Closing db connection");
    await db.close();
    console.log("Db connection closed");
  }
};

// Identifies that 'seed' module is being run directly, so not accidentally called in development or testing
if (module === require.main) {
  runSeed();
}
