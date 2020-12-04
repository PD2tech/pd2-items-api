const router = require("express").Router();
const Rune = require("../models/runes.model");

router.get("/items/runes", async (req, res) => {
  try {
    const runes = await Rune.find({}, "-_id");
    res.status(200).json(runes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
