const mongoose = require("mongoose");
require("dotenv").config();
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db", process.env.MONGO_URL);
  } catch (err) {
    console.log("Error in connecting to db");
  }
};

module.exports = connectToDb;
