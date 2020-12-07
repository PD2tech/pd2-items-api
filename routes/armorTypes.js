const router = require("express").Router();
const ArmorType = require("../models/armor_types.model");

router.get("/armors/types", async (req, res) => {
  try {
    const armor_types = await ArmorType.find({}, "-_id");
    res.status(200).json(armor_types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
