const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemStatSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  stat1: { type: String, required: true },
  stat2: { type: String, required: false },
  stat3: { type: String, required: false },
  stat4: { type: String, required: false },
  stat5: { type: String, required: false },
  stat6: { type: String, required: false },
  stat7: { type: String, required: false },
  stat8: { type: String, required: false },
});

const ItemStat = mongoose.model("item_stats", ItemStatSchema);

module.exports = ItemStat;
