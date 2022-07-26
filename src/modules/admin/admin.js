const { admin } = require("./module");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");
const bcrypt = require("bcrypt");
module.exports = {
  POST: async (req, res) => {
    try {
      const { username, password } = req.body;
      const uniqueAdmin = await admin(username);
      const verifyPassword = await bcrypt.compare(
        password,
        uniqueAdmin[0].password
      );
      if (verifyPassword) {
        return res.status(201).json({
          token: jwt.sign(
            {
              admin_id: uniqueAdmin[0].admin_id,
              username: uniqueAdmin[0].username,
              password: uniqueAdmin[0].password,
              role: uniqueAdmin[0].role,
            },
            SECRET_KEY,
            { expiresIn: "7200s" }
          ),
          role: uniqueAdmin[0].role,
          username: uniqueAdmin[0].username,
        });
      }
      return res.status(404).json({ message: "Password is valid" });
    } catch (err) {
      return res.status(404).json({ success: false, message: "Not found" });
    }
  },
};
