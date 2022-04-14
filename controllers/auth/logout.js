const { User } = require("../../models");
// const { Unauthorized } = require("http-errors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204).json();
};

module.exports = logout;
