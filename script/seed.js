const {
  db,
  models: { User },
} = require("../server/db");

const seed = async () => {
  await db.sync({ force: true }); // cleare db and matched models to tables
  console.log("Db synced with seed file");

  // Create users
  await Promise.all([
    User.create({ firstName: "Alston", lastName: "White" }),
    User.create({ firstName: "Nick", lastName: "Izzard" }),
    User.create({ firstName: "Jackson", lastName: "Doherty" }),
    User.create({ firstName: "Trey", lastName: "Gill" }),
    User.create({ firstName: "Soupy", lastName: "Jones", type: "admin" }),
  ]);
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
  