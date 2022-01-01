const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide item name"],
    trim: true,
    maxlength: [20, "No item name can be more than 20 character"],
  },
  price: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Grocery", GrocerySchema);
