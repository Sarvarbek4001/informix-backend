const { get_block_section } = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { sectionId } = req.params;
      const block_section = await get_block_section(sectionId);
      if (block_section) {
        res.status(200).json({ success: true, block_section });
      } else {
        res.status(404).json({ success: false, message: "Not found" });
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
