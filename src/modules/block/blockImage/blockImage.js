const {
  new_block_image,
  single_block_img,
  delete_block_img,
} = require("./module");
const path = require("path");
const fs = require("fs");
module.exports = {
  GET: async (req, res) => {
    try {
      const singleBlockImg = await single_block_img(req.params.id);
      if (singleBlockImg) {
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, singleBlockImg.b_filepath);
        return res.type(singleBlockImg.b_mimetype).sendFile(fullfilepath);
      }
      return res.status(404).json({ message: "Image does not exist" });
    } catch (err) {
      res
        .status(404)
        .json({ success: false, message: "not found", stack: err.stack });
    }
  },
  POST: async (req, res) => {
    try {
      const { filename, mimetype, size } = req.file;
      const filepath = req.file.path;
      const { blockId } = req.params;
      const newBlockImg = await new_block_image(
        filename,
        filepath,
        mimetype,
        size,
        blockId
      );
      res.status(201).json({ success: true, filename, newBlockImg });
    } catch (err) {
      res.json({ success: false, message: "upload failed", stack: err.stack });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { blockId } = req.params;
      const deleteBlockImg = await delete_block_img(blockId);
      if (deleteBlockImg) {
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, deleteBlockImg.b_filepath);
        fs.unlinkSync(fullfilepath);
        return res
          .status(202)
          .json({ success: true, message: "DELETED image" });
      } else {
        return res.status(500).json({ success: false });
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
