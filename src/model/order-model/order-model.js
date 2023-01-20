const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id: { type: String, required: false },
  cartProducts: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
