const express = require("express");

const pokemon = require("./models/pokemon");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon app!!");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
