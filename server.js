const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon app!!");
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
