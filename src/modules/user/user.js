const { one_user } = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { id } = req.params;
      const oneUser = await one_user(id);
      res.status(200).json(oneUser);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },
};
