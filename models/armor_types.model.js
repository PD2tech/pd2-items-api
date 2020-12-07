const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArmorTypeSchema = new Schema({
  type_name: { type: String, required: true },
  type_code: { type: String, required: true },
  bases: [{ type: Object, required: true }],
});

const ArmorType = mongoose.model("armor_types", ArmorTypeSchema);

module.exports = ArmorType;
