const router = require("express").Router();
const Item_Stat = require("../models/item_stats.model");

router.get("/stats/all-stats", async (req, res) => {
  try {
    const item_stats = await Item_Stat.find({}, "-_id");
    res.status(200).json(item_stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
