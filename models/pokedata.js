const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

const Pokemon = mongoose.model("Poekmon", pokemonSchema);

module.exports = Pokemon;
