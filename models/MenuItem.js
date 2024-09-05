const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  taste: {
    type: String,
    enum: ["chicken wings", "spices", "sauce"],
  },
  ingredients: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const Menu = mongoose.model("Menu", MenuItemSchema);

module.exports = Menu;
