const router = require("express").Router();
const {
  models: { Ladder, User, Match },
} = require("../db");

module.exports = router;

// Get all ladders
// GET /api/ladders
router.get("/", async (req, res, next) => {
  try {
    const ladders = await Ladder.findAll();
    res.json(ladders);
  } catch (err) {
    console.log("Error at GET /api/ladders ", err);
    next(err);
  }
});

// Get single ladder by Id
// GET /api/ladders/:ladderId
router.get("/:ladderId", async (req, res, next) => {
  try {
    const ladder = await Ladder.findByPk(req.params.ladderId);
    res.json(ladder);
  } catch (err) {
    console.log("Error at GET /api/ladders/:ladderId ", err);
    next(err);
  }
});

// Get all players in single ladder
// GET /api/ladders/:ladderId/players
router.get("/:ladderId/players", async (req, res, next) => {
  try {
    // const ladder = await Ladder.findByPk(req.params.ladderId)
    // const ladderPlayers = await ladder.getUsers()
    const ladderPlayers = await Ladder.findByPk(req.params.ladderId, {
      include: { model: User },
    }).then(res => res.users);
    res.json(ladderPlayers);
  } catch (err) {
    console.log("Error at GET /api/ladders/:ladderId/players ", err);
    next(err);
  }
});

// Get all matches in single ladder
// GET /api/ladders/:ladderId/matches
router.get("/:ladderId/matches", async (req, res, next) => {
    try {
      // const ladder = await Ladder.findByPk(req.params.ladderId)
      // const ladderPlayers = await ladder.getUsers()
      const ladderMatches = await Ladder.findByPk(req.params.ladderId, {
        include: { model: Match },
      }).then(res => res.matches);
      res.json(ladderMatches);
    } catch (err) {
      console.log("Error at GET /api/ladders/:ladderId/matches ", err);
      next(err);
    }
  });
