const express = require("express");

const app = express.Router();

app.get("/", (req, res) => {
  res.send("Its runnig on wishlist page");
});

module.exports = app;
