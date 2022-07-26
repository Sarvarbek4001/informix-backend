const {
  new_price,
  update_price,
  delete_price,
  get_prices,
} = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const allPrices = await get_prices();
      if (allPrices) {
        res.status(200).json({ success: true, allPrices });
      } else {
        res.status(404).json({ success: false, message: "Not Found" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  POST: async (req, res) => {
    try {
      const { priceTitleUz,priceTitleRu,priceTitleEn, priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn } = req.body;
      const newPrice = await new_price(priceTitleUz,priceTitleRu,priceTitleEn, priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn);
      if (newPrice) {
        res.status(200).json({ success: true, newPrice });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Internal server Error" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  PUT: async (req, res) => {
    try {
      const { priceTitleUz,priceTitleRu,priceTitleEn, priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn, priceId } = req.body;
      const updatePrice = await update_price(
          priceTitleUz,
          priceTitleRu,
          priceTitleEn,
          priceNumber,
          priceSubTitleUz,
          priceSubTitleRu,
          priceSubTitleEn,
          priceId
      );
      if (updatePrice) {
        res.status(200).json({ success: true, updatePrice });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Internal server Error" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  DELETE: async (req, res) => {
    try {
      const { priceId } = req.params;
      const removePrice = await delete_price(priceId);
      if (removePrice) {
        res.status(202).json({ success: true });
      } else {
        res.status(404).json("Not Found");
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
