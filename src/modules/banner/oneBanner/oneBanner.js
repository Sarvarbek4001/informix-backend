const { getOneBanner } = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { bannerId } = req.params;
      const one_banner = await getOneBanner(bannerId);
      if (one_banner) {
        res.status(200).json({ success: true, one_banner });
      } else {
        res.status(404).json({ success: false, message: "Banner not found" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
