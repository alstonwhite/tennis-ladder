const router = require("express").Router();
const {
  models: { Match },
} = require("../db");

module.exports = router;

// Get all matches
// GET /api/matches
router.get("/", async (req, res, next) => {
  try {
    const matches = await Match.findAll();
    res.json(matches);
  } catch (err) {
    console.log("Error at GET /api/matches: ", err);
    next(err);
  }
});

// Get single match by Id
// GET /api/matches/matchId
router.get("/:matchId", async (req, res, next) => {
  try {
    const matches = await Match.findByPk(req.params.matchId);
    res.json(matches);
  } catch (err) {
    console.log("Error at GET /api/matches/matchId: ", err);
    next(err);
  }
});

// Create a new match
// POST /api/matches
router.post("/", async (req, res, next) => {
  try {
    const newMatch = await Match.create(req.body);
    res.status(201).send(newMatch);
  } catch (err) {
    console.log("Error at POST /api/matches ", err);
    next(err);
  }
});

// Edit an existing match
// PUT /api/matches/:matchId
router.put("/:matchId", async (req, res, next) => {
  try {
    const match = await Match.findByPk(req.params.matchId);
    const updatedMatch = await match.update(req.body);
    res.send(updatedMatch);
  } catch (err) {
    console.log("Error at PUT /api/matches/:matchId ", err);
    next(err);
  }
});

// Delete an existing match
// DELETE /api/matches/:matchId
router.delete("/:ladderId", async (req, res, next) => {
  try {
    const match = await Match.findByPk(req.params.matchId);
    await match.destroy();
    res.send(match);
  } catch (err) {
    console.log("Error at DELETE /api/matches/:matchId ", err);
    next(err);
  }
});
