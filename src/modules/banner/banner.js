const {
  section_banner,
  new_banner,
  update_banner,
  delete_banner,
} = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { sectionId } = req.params;
      const sectionBanner = await section_banner(sectionId);
      res.status(200).json(sectionBanner);
    } catch (err) {
      res.status(404).json({ success: false, err: err.message });
    }
  },
  POST: async (req, res) => {
    try {
      console.log(req.body);
      const { bannerTitleUz,bannerTitleRu,bannerTitleEn, sectionId } = req.body;
      const newBanner = await new_banner(bannerTitleUz,bannerTitleRu,bannerTitleEn, sectionId);
      res.status(201).json({ success: true, newBanner: newBanner });
    } catch (err) {
      res.json({ success: false, err: err.message });
    }
  },
  PUT: async (req, res) => {
    try {
      const { bannerTitleUz,bannerTitleRu,bannerTitleEn, bannerId } = req.body;
      console.log({bannerTitleUz,bannerTitleRu,bannerTitleEn,})
      const updateBanner = await update_banner(bannerTitleUz,bannerTitleRu,bannerTitleEn, bannerId);
      res.status(201).json(updateBanner);
    } catch (err) {
      res.json({ success: false, err: err.message });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { id } = req.params;
      await delete_banner(id);
      res.status(200).json({ message: "DELETED BANNER" });
    } catch (err) {
      res.json({ success: false, err: err.message });
    }
  },
};
