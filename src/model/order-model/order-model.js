const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  cartProducts: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
