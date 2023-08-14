const express = require("express");

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

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon app!!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  //   let pok = pokemon[req.params.id];
  //   res.render("Show", { pokemon: pok });
  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
