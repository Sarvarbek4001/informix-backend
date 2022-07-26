const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
async function adminMiddlware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: err.message });
    }
    if (user.role === "ADMIN") {
      req.body.adminId = user.admin_id;
      next();
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Sorry, you are not allowed" });
    }
  });
}

module.exports = adminMiddlware;
