const express = require("express");
const axios = require("axios");
const pokemon = require("./models/pokemon");
const PokeData = require("./models/pokedata");
const app = express();

const PORT = 3000;

require("dotenv").config();

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Tell express to use middleware
//Encode the url to read in a acertain way
//This is so we can use the post request to read body data
app.use(express.urlencoded({ extended: false }));

//Allows for use of res.json
app.use(express.json());

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const pokeList = [];

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Pokemon app!!</h1><a href='/pokemon'>Go to list</a>"
  );
});

app.get("/pokemon/seed", async (req, res) => {
  //deletteing all current data
  await PokeData.deleteMany({});

  await PokeData.create(pokemon);
  res.redirect("/pokemon");
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.get("/pokemon", async (req, res) => {
  // const dat = await axios.get("https://pokeapi.co/api/v2/pokemon");
  // let items = await dat.data;
  // console.log(items);

  await PokeData.find({}).then((data) => {
    res.render("Index", { pokemon: data });
  });
});

app.post("/pokemon", async (req, res) => {
  // const dat = await axios.get("https://pokeapi.co/api/v2/pokemon");
  // let items = await dat.data;
  console.log(req.body.pokemon);

  await PokeData.create({
    name: req.body.pokemon,
    img: `http://img.pokemondb.net/artwork/${req.body.pokemon.toLowerCase()}`,
  });

  res.redirect("/pokemon");
});

app.delete("/pokemon/:id", async (req, res) => {
  await PokeData.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/:id", async (req, res) => {
  // let poke = pokemon[req.params.id];

  try {
    // const dat = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    // );
    // let poke = await dat.data;
    // console.log(poke);

    const pok = await PokeData.findById(req.params.id);
    //console.log(pokemon);
    res.render("Show", { pokemon: pok, id: req.params.id });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.put("/pokemon/:id", async (req, res) => {
  // let poke = pokemon[req.params.id];

  try {
    // const dat = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    // );
    // let poke = await dat.data;
    // console.log(poke);

    await PokeData.findByIdAndUpdate(req.params.id, {
      name: req.body.pokemon,
      img: `http://img.pokemondb.net/artwork/${req.body.pokemon}`,
    }).then(() => {
      res.redirect("/pokemon");
    });
    //console.log(pokemon);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get("/pokemon/:id/edit", async (req, res) => {
  // let poke = pokemon[req.params.id];

  try {
    // const dat = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    // );
    // let poke = await dat.data;
    // console.log(poke);

    const pok = await PokeData.findById(req.params.id);
    //console.log(pokemon);
    res.render("Change", { pokemon: pok, id: req.params.id });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
