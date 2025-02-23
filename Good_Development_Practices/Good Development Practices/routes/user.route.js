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
userRoute.post("/", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({ msg: "User created successfull" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to create User" });
  }
});

userRoute.put("/:id", async (req, res) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ msg: "User updated sucessfull" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to update user" });
  }
});

module.exports = userRoute;
