const path = require("path");
const express = require("express");
const { db } = require("./db");

const PORT = process.env.PORT || 8080;

const app = express();

// Connect db
db.sync();

// Body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route all API calls to /api/index
app.use("/api", require("./api"))

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// Static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
