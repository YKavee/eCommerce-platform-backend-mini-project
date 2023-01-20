const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  id: { type: String, required: false },
  title: { type: String, required: true },
});

module.exports = mongoose.model("categories", categorySchema);
