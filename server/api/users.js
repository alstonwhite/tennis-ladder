const router = require("express").Router();
const {
  models: { User },
} = require("../db");

module.exports = router;

// Get all users
// GET /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.log("Error at GET /api/users ", err);
    next(err);
  }
});

// Get single user by Id
// GET /api/users/:userId
router.get("/:userId", async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);
      res.json(user);
    } catch (err) {
      console.log("Error at GET /api/user/:userId ", err);
      next(err);
    }
  });
