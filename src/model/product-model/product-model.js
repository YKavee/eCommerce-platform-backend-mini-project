const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  category: { type: String, required: true },
  cover: { type: String, required: true },
  desc: { type: String, required: false },
});

module.exports = mongoose.model("Product", productSchema);
