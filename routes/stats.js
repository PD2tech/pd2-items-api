const router = require("express").Router();
const Stat_Type = require("../models/stat_types.model");

router.get("/items/stat-types", async (req, res) => {
  try {
    const stat_types = await Stat_Type.find({}, "-_id");
    res.status(200).json(stat_types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
