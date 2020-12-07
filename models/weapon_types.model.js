const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeaponTypeSchema = new Schema({
  type_name: { type: String, required: true },
  type_code: { type: String, required: true },
  bases: [{ type: Object, required: true }],
});

const WeaponType = mongoose.model("weapon_types", WeaponTypeSchema);

module.exports = WeaponType;
