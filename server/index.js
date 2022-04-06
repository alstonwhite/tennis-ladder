const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Server api endpoint" });
});

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// Any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
