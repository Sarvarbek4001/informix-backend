const { new_brand, single_brand, delete_brand } = require("./module");
const path = require("path");
const fs = require("fs");

module.exports = {
  GET: async (req, res) => {
    try {
      const singleBrand = await single_brand(req.params.id);
      if (singleBrand) {
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, singleBrand.filepath);
        console.log(fullfilepath);
        return res.type(singleBrand.mimetype).sendFile(fullfilepath);
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
      const newBrand = await new_brand(filename, filepath, mimetype, size);
      res.status(201).json({ success: true, filename, newBrand });
    } catch (err) {
      res.json({ success: false, message: "upload failed", stack: err.stack });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBrand = await delete_brand(id);
      if (deletedBrand) {
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, deletedBrand.filepath);
        fs.unlinkSync(fullfilepath);
        res.status(200).json({ success: true, message: "deleted brand" });
      } else {
        return res.status(500).json({ success: false });
      }
    } catch (err) {
      res.json({ success: false, stack: err.stack });
    }
  },
};
