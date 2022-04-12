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
    }).then((res) => res.users);
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
    }).then((res) => res.matches);
    res.json(ladderMatches);
  } catch (err) {
    console.log("Error at GET /api/ladders/:ladderId/matches ", err);
    next(err);
  }
});

// Create a new ladder
// POST /api/ladders
router.post("/", async (req, res, next) => {
  try {
    const newLadder = await Ladder.create(req.body);
    res.status(201).send(newLadder);
  } catch (err) {
    console.log("Error at POST /api/ladders ", err);
    next(err);
  }
});

// Edit an existing ladder
// PUT /api/ladders/:ladderId
router.put("/:ladderId", async (req, res, next) => {
  try {
    const ladder = await Ladder.findByPk(req.params.ladderId);
    const updatedLadder = await ladder.update(req.body);
    res.send(updatedLadder);
  } catch (err) {
    console.log("Error at PUT /api/ladders/:ladderId ", err);
    next(err);
  }
});

// Delete an existing ladder
// DELETE /api/ladders/:ladderId
router.delete("/:ladderId", async (req, res, next) => {
    try {
      const ladder = await Ladder.findByPk(req.params.ladderId);
      await ladder.destroy();
      res.send(ladder);
    } catch (err) {
      console.log("Error at DELETE /api/ladders/:ladderId ", err);
      next(err);
    }
  });
