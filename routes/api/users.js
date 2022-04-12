const express = require("express");

const { signup, login } = require("../../controllers/users");
const { joiSingupSchema, joiLoginSchema } = require("../../models/users");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
