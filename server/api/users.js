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

// Create a new user
// POST /api/users
router.post("/", async (req, res, next) => {
  try {
    const newMatch = await User.create(req.body);
    res.status(201).send(newMatch);
  } catch (err) {
    console.log("Error at POST /api/users ", err);
    next(err);
  }
});

// Edit an existing user
// PUT /api/users/:userId
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const updatedUser = await user.update(req.body);
    res.send(updatedUser);
  } catch (err) {
    console.log("Error at PUT /api/users/:userId ", err);
    next(err);
  }
});

// Delete an existing user
// DELETE /api/users/:userId
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.send(user);
  } catch (err) {
    console.log("Error at DELETE /api/users/:userId ", err);
    next(err);
  }
});
