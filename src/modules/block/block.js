const {
  section,
  banner_title,
  new_block,
  remove_block,
  update_block,
} = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const allSection = await section(req.params.sectionId);
      const bannerTitle = await banner_title(req.params.sectionId);
      return res
        .status(200)
        .json({ blocks: allSection, bannerTitle: bannerTitle });
    } catch (err) {
      console.log(err.message);
    }
  },
  POST: async (req, res) => {
    try {
      const { titleUz,titleRu,titleEn, contentUz,contentRu,contentEn,buttonNameUz,buttonNameRu,buttonNameEn, b_row_reverse, section_id } = req.body;
      console.log(titleUz,titleRu,titleEn, contentUz,contentRu,contentEn,buttonNameUz,buttonNameRu,buttonNameEn, b_row_reverse, section_id);
      const newBlock = await new_block(
          titleUz,
          titleRu,
          titleEn,
          contentUz,
          contentRu,
          contentEn,
          buttonNameUz,
          buttonNameRu,
          buttonNameEn,
          b_row_reverse,
          section_id
      );
      console.log(newBlock);
      if (newBlock) {
        res.status(201).json({ success: true, newBlock });
      } else {
        res.json({ success: false });
      }
    } catch (err) {
      res.json({
        success: false,
        stack: err.stack,
      });
    }
  },
  PUT: async (req, res) => {
    try {
      const { titleUz,titleRu,titleEn, contentUz,contentRu,contentEn,buttonNameUz,buttonNameRu,buttonNameEn, b_row_reverse, blockId } = req.body;
      console.log(titleUz,titleRu,titleEn, contentUz,contentRu,contentEn,buttonNameUz,buttonNameRu,buttonNameEn, b_row_reverse, blockId);
      const change_block = await update_block(
          titleUz,
          titleRu,
          titleEn,
          contentUz,
          contentRu,
          contentEn,
          buttonNameUz,
          buttonNameRu,
          buttonNameEn,
          b_row_reverse,
          blockId
      );
      if (change_block) {
        res.status(200).json({ success: true, message: "Updated" });
      }
    } catch (err) {
      res.json({
        success: false,
        stack: err.stack,
      });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { blockId } = req.body;
      const removeBlock = await remove_block(blockId);
      if (removeBlock) {
        res.status(200).json({ success: true, message: "This block deleted" });
      } else {
        res.status(404).json({ success: false, message: "Block Not found " });
      }
    } catch (err) {
      res.json({
        success: false,
        stack: err.stack,
      });
    }
  },
};
