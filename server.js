const express = require("express");
const axios = require("axios");
const pokemon = require("./models/pokemon");
const app = express();

const PORT = 3000;

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Tell express to use middleware
//Encode the url to read in a acertain way
//This is so we can use the post request to read body data
app.use(express.urlencoded({ extended: false }));

//Allows for use of res.json
app.use(express.json());

const pokeList = [];

const getPokemon = async () => {
  const dat = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  console.log(dat.data);
  return await dat.data;
};

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Pokemon app!!</h1><a href='/pokemon'>Go to list</a>"
  );
});

app.get("/pokemon", async (req, res) => {
  const dat = await axios.get("https://pokeapi.co/api/v2/pokemon");
  getPokemon();
  let items = await dat.data;
  //   console.log(items);
  res.render("Index", { pokemon: pokemon });
  //   res.send(items);
});

app.get("/pokemon/:id", (req, res) => {
  let pok = pokemon[req.params.id];
  res.render("Show", { pokemon: pok, id: req.params.id });
  //   res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
