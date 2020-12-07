const router = require("express").Router();
const WeaponType = require("../models/weapon_types.model");

router.get("/weapons/types", async (req, res) => {
  try {
    const weapon_types = await WeaponType.find({}, "-_id");
    res.status(200).json(weapon_types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
