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

app.get("/pokemon", async (req, res) => {
  // const dat = await axios.get("https://pokeapi.co/api/v2/pokemon");
  // let items = await dat.data;
  // console.log(items);

  PokeData.find({}).then((data) => {
    res.render("Index", { pokemon: data });
  });
});

app.get("/pokemon/:id", async (req, res) => {
  let poke = pokemon[req.params.id];

  try {
    // const dat = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    // );
    // let poke = await dat.data;
    // console.log(poke);
    res.render("Show", { pokemon: poke, id: req.params.id });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
