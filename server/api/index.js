const router = require("express").Router();

module.exports = router;

router.use("/users", require("./users"));
router.use("/ladders", require("./ladders"));
router.use("/matches", require("./matches"));

router.use((req, res, next) => {
  const error = new Error("Page not found.");
  error.status = 404;
  next(error);
});
