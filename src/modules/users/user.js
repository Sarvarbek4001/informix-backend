const { users, newUser, connectedUser, delete_user } = require("./model");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");
module.exports = {
  GET: async (req, res) => {
    try {
      const allUsers = await users();
      return res.status(200).json(allUsers);
    } catch (err) {
      return res.status(403).json({ message: err.message });
    }
  },

  POST: async (req, res) => {
    try {
      const new_user = await newUser(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.phoneNumber
      );
      res.status(200).json({ message: "Created User" });
    } catch (err) {
      return res.status(403).json({ message: err.message });
    }
  },

  PUT: async (req, res) => {
    try {
      const { is_connected, user_id, adminId } = req.body;
      console.log(is_connected, user_id, adminId);
      const updateUser = await connectedUser(is_connected, adminId, user_id);
      res.status(200).json({ message: "Connected user" });
    } catch (err) {
      console.log(err.message);
    }
  },
  DELETE: async (req, res) => {
    try {
      const { user_id } = req.body;
      // console.log(user_id);
      const deleted_User = await delete_user(user_id);
      res.status(200).json({ message: "Deleted User" });
    } catch (err) {
      console.log(err.message);
    }
  },
};
