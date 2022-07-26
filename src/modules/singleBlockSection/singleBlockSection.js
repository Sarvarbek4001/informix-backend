const { single_block } = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { blockId } = req.params;
      const singleBlock = await single_block(blockId);
      if (singleBlock) {
        res.status(200).json({ success: true, singleBlock });
      } else {
        res.status(404).json({ success: false, message: "Not found" });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
