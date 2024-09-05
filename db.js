const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
// const mongoUrl = process.env.MONGO_URL_LOCAL;

mongoose.connect(mongoUrl, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database Connected");
});

db.on("error", (err) => {
  console.log("Database Connection Failed", err);
});

db.on("disconnected", () => {
  console.log("Database Disconnected");
});

module.exports = db;
