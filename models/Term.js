const mongoose = require("mongoose");

const termSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 80, unique: true },
});

const Term = mongoose.model("Term", termSchema);

module.exports = Term;
