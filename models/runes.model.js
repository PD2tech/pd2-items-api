const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RunesSchema = new Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  levelreq: { type: String, required: true },
  rarity: { type: String, required: false },
  code: { type: String, required: true },
  item_image: { type: String, required: true },
});

const Rune = mongoose.model("runes", RunesSchema);

module.exports = Rune;
