const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const Person = require("./routes/PersonRoutes");
const Menu = require("./routes/MenuRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json("Welcome to Node js");
});

app.use("/Person", Person);
app.use("/Menu", Menu);

app.listen(PORT, () => {
  console.log(`Server has Started`);
});
