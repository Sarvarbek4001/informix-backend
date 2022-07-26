const { brand_image_id } = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const allbrandImageID = await brand_image_id();
      res.status(200).json({ brandImageId: allbrandImageID });
    } catch (err) {
      console.log(err.message);
    }
  },
};
