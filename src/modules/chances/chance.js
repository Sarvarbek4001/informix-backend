const {
  new_chance,
  update_chance,
  remove_chance,
  get_price_chances,
} = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { priceId } = req.params;
      const getPriceChances = await get_price_chances(priceId);
      if (getPriceChances) {
        res.status(200).json({ success: true, getPriceChances });
      } else {
        res.status(404).json({ success: false, message: "Not Found" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const { chanceTitleUz,chanceTitleRu,chanceTitleEn, priceId } = req.body;
      const createdChance = await new_chance(chanceTitleUz,chanceTitleRu,chanceTitleEn, priceId);
      if (createdChance) {
        res.status(200).json({ success: true, message: "Created" });
      } else {
        res.json({ success: false });
      }
    } catch (err) {
      res.json({ success: false, message: err.message });
    }
  },
  PUT: async (req, res) => {
    try {
      const { chanceTitleUz,chanceTitleRu,chanceTitleEn, chanceId } = req.body;
      const updateChance = await update_chance(chanceTitleUz,chanceTitleRu,chanceTitleEn, chanceId);
      if (updateChance) {
        res.status(200).json({ success: true, message: "Updated" });
      } else {
        res.json({ success: false });
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE: async (req, res) => {
    try {
      const { chanceId } = req.params;
      const deletedChance = await remove_chance(chanceId);
      if (deletedChance) {
        res.status(200).json({ success: true, message: "Deleted" });
      } else {
        res.status(404).json({ success: false, message: "Not found" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
