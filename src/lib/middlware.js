const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: err.message });
    else {
      req.body.adminId = user.admin_id;
      next();
    }
  });
}

module.exports = authenticateToken;
