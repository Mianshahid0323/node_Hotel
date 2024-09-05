const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: {
    type: String,
    unique: true,
  },
  age: {
    type: String,
    required: true,
  },

  address: {
    type: String,
  },
  salary: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
    enum: ["Chef", "Waiter", "Manager"],
  },
});

const Person = mongoose.model("People", PersonSchema);

module.exports = Person;
