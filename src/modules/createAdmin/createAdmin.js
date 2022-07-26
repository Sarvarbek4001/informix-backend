const { new_admin } = require("./module");
const bcrypt = require("bcrypt");
module.exports = {
  POST: async (req, res) => {
    try {
      const { username, password, role } = req.body;
      if (
        username.trim().length === 0 ||
        password.trim().length === 0 ||
        role.trim().length === 0
      ) {
        return res.status(404).json({
          success: false,
          message: "username ,password or role is valid",
        });
      } else {
        const hash = await bcrypt.hash(password, 10);
        await new_admin(username, hash, role);
        return res.status(200).json({ message: "Created new Admin" });
      }
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "username is available ",
        stack: err.stack,
      });
    }
  },
};
