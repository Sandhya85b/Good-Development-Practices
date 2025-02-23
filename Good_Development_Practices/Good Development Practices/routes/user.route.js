const express = require("express");
const userModel = require("../models/user.model");
require("dotenv").config();
const SALTROUNDS = process.env.SALT_ROUNDS;

const userRoute = express.Router();
const bcrypt = require("bcrypt");
userRoute.get("/", async (req, res) => {
  try {
    const user = await userModel.findOne(req.body);
    res.status(200).json({ msg: "List of all users", user });
  } catch (err) {
    res.status(500).json({ msg: "Error in getting list of all users" });
  }
});


module.exports = userRoute;
