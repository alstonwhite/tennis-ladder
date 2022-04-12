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
